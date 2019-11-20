import * as React from 'react';
import {Text} from 'react-native';

export default class WelcomeText extends React.Component {
  constructor(props) {
    super(props);
    this.getUsername = this.getUsername.bind(this);
  }

  getUsername = () => {
    return this.props.username === null ? 'User' : this.props.username;
  };

  render() {
    return <Text style={this.props.style}> Welcome {this.getUsername()}!</Text>;
  }
}
