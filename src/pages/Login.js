import React from 'react';
import {Image, View, Button, Linking, Platform, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation';
import {colors, fonts, padding, dimensions} from './../styles/base.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange = username => {
    this.setState({username: username});
  };

  handlePasswordChange = password => {
    this.setState({password: password});
  };

  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    if (this.state.username === '' || this.state.password === '') {
      // eslint-disable-next-line no-alert
      alert('Please fill your username and password!');
    } else {
      // auth
      console.log('login in');
      /*
      await connexionAction.askToken(this.state.username, this.state.password)
      const { token } = this.props
      token ? (
      navigate('CoursePage', {user: this.state.username })
      ) : (
        alert(this.props.error)
      )
      */
      navigate('App', {user: this.state.username});
    }
  };

  //Deep linking
  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }

    Orientation.lockToPortrait();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = e => {
    this.navigate(e.url);
  };

  navigate = url => {
    const {navigate} = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const routeName = route.split('/')[0];

    if (routeName === 'app') {
      navigate('App/Home');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/PolyTeach_Logo_RGB.png")} style={styles.header}/>
        <TextInput
          style={styles.textField}
          placeholder="username"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handleUsernameChange}
        />

        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handlePasswordChange}
        />

        <Button onPress={this.handleSubmit} title="Login" />
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.fullWidth,
    backgroundColor: colors.background,
  },
  header: {
    width: dimensions.fullWidth / 2,
    height: dimensions.fullHeight / 8 

  },
  textField: {
    width: dimensions.fullWidth / 2,
    backgroundColor: colors.primary,
    marginBottom: padding.sm,
  },
});