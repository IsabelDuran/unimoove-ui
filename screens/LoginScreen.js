import React from 'react';
import LoginForm from '../Components/LoginForm';
import {CustomUsersApi} from '../CustomApiClient';
var UnimooveApi = require('unimoove_api');

export default class LoginScreen extends React.Component {
  loginUser(body){

  }
  render() {
    return <LoginForm handlePress={this.loginUser}/>;
  }
}
