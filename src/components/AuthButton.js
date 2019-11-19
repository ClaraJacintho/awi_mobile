import * as React from 'react';
import {Button, Linking, Platform, Alert} from 'react-native';
import {getConnectionURI, getToken} from '../utils/auth';

export default class AuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.connectWithOAuth = this.connectWithOAuth.bind(this);
    this.retrieveTokens = this.retrieveTokens.bind(this);
    this.state = {
      authState: '',
    };
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

  handleOpenURL = e => this.retrieveTokens(e.url);

  retrieveTokens = url => {
    console.log('coucou');
    try {
      const {navigate} = this.props.navigation;
      const tokens = getToken(url, this.state.authState);
      Alert.alert('tokens', tokens.access_token + '\n' + tokens.refresh_token);
      this.props.setToken(tokens.access_token, tokens.refresh_token);
      navigate('App/Home');
    } catch (e) {
      console.log(e);
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
