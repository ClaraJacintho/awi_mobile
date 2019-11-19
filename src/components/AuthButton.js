import * as React from 'react';
import {Button, Linking, Platform} from 'react-native';
import {getConnectionURI, getToken} from '../utils/auth';

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

  handleOpenURL = e => this.retrieveTokens(e.url);

  retrieveTokens = url => {
    console.log(url);
    if (url !== null) {
      console.log('coucou');
      try {
        const {navigate} = this.props.navigation;
        const tokens = getToken(url, this.state.authState);
        console.log(tokens.access_token + '\n' + tokens.refresh_token);
        this.props.setToken(tokens.access_token, tokens.refresh_token);
        navigate('App/');
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
    console.log(this.state);
    console.log(conn.state);
    this.setState({authState: conn.state});
    console.log(this.state);
    Linking.openURL(conn.URI);
    const {navigate} = this.props.navigation;
    navigate('Login');
  };

  render() {
    return (
      <Button title="Connect with OAuth" onPress={this.connectWithOAuth} />
    );
  }
}
