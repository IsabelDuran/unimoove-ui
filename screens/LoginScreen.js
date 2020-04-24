import React from 'react';
import LoginForm from '../Components/LoginForm';
import {CustomUsersApi} from '../CustomApiClient';
var UnimooveApi = require('unimoove_api');

export default class LoginScreen extends React.Component {
  loginUser(body) {
    var apiInstance = new CustomUsersApi();
    let opts = {
      body: new UnimooveApi.LoginRequest(
        body['password'],
        body['username'],
      ), 
    };
    var callback = function(response) {
      if (response.ok) console.log('Inicio de sesión correcto');
      else response.json().then(data => console.log(data));
      return {};
    };
    apiInstance.loginUser(opts, callback);
  }
  render() {
    return (
      <LoginForm
        handlePress={this.loginUser}
        navigation={this.props.navigation}
      />
    );
  }
}
