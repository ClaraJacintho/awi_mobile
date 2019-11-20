import * as React from 'react';
import {Button, Linking, Platform} from 'react-native';
import {
  getConnectionURI,
  getToken,
  decodeToken,
  checkTokenValidity,
} from '../utils/auth';

export default class AuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.connectWithOAuth = this.connectWithOAuth.bind(this);
    this.retrieveTokens = this.retrieveTokens.bind(this);
    this.checkToken = this.checkToken.bind(this);
  }

  //Deep linking
  componentDidMount() {
    if (
      this.props.accessToken !== undefined &&
      this.props.refreshToken !== undefined
    ) {
      this.checkToken();
    }
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        return this.retrieveTokens(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = e => this.retrieveTokens(e.url);

  checkToken = async () => {
    try {
      const valid = await checkTokenValidity(
        this.props.accessToken,
        this.props.refreshToken,
        this.props.networkState,
      );
      console.log(valid)
      const {navigate} = this.props.navigation;
      if (!valid.validity) {
        this.props.updateTokens(valid.accessToken, valid.refreshToken);
      }
      navigate('Courses');
    } catch (e) {
      if (e instanceof TypeError) {
        this.props.deleteUserData();
      }
    }
  };

  retrieveTokens = async url => {
    if (url !== null) {
      try {
        const {navigate} = this.props.navigation;
        const tokens = await getToken(url, this.props.oauthState);
        const payload = await decodeToken(tokens.access_token);
        const username = payload.firstname + '.' + payload.lastname;
        this.props.updateUser(
          username,
          payload.role,
          tokens.access_token,
          tokens.refresh_token,
        );
        navigate('Courses');
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Not yet not yet');
    }
  };

  connectWithOAuth = () => {
    const conn = getConnectionURI();
    this.props.saveState(conn.state);
    Linking.openURL(conn.URI);
  };

  render() {
    return (
      <Button title="Connect with OAuth" onPress={this.connectWithOAuth} />
    );
  }
}
