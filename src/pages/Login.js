import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FormButton from '../components/FormButton';
import styles from '../styles/LoginStyles'

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
      console.log('a');
      /*
      await connexionAction.askToken(this.state.username, this.state.password)
      const { token } = this.props
      token ? (
      navigate('CoursePage', {user: this.state.username })
      ) : ( 
        alert(this.props.error)
      )
      */
     navigate('CoursePage', {user: this.state.username })
    }
  };



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Twiddle</Text>
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
        {
          // why u no work??
        }
        <FormButton lablel={'Login'} onPress={() => navigate('Home')} />
      </View>
    );
  }
}


