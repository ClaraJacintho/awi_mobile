import * as React from 'react';
import {Button, Linking, Platform} from 'react-native';
import {getConnectionURI, getToken, decodeToken} from '../utils/auth';

export default class AuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: '',
    };
    this.connectWithOAuth = this.connectWithOAuth.bind(this);
    this.retrieveTokens = this.retrieveTokens.bind(this);
  }

  //Deep linking
  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.retrieveTokens(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = e => {
    this.retrieveTokens(e.url);
  };

  retrieveTokens = async url => {
    if (url !== null) {
      try {
        const {navigate} = this.props.navigation;
        const tokens = await getToken(url, this.state.authState);
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

  /*navigate = url => {
    const {navigate} = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const routeName = route.split('/')[0];

    if (routeName === 'app') {
      navigate('App/Home');
    }
  };*/
  connectWithOAuth = () => {
    const conn = getConnectionURI();
    this.setState({authState: conn.state});
    Linking.openURL(conn.URI);
  };

  render() {
    return (
      <Button title="Connect with OAuth" onPress={this.connectWithOAuth} />
    );
  }
}
