import React from 'react';
import {Text, Alert} from 'react-native';
import RegistrationForm from '../Components/RegistrationForm';
import { CustomUsersApi } from '../CustomApiClient'
var UnimooveApi = require('unimoove_api');

export default class RegistrationScreen extends React.Component {
  registerUser(body) {
    var apiInstance = new CustomUsersApi();
    let opts = {
      body: new UnimooveApi.UserRegistrationRequest(
        body["birthdate"],
        body["email"],
        body["gender"],
        body["lastname"],
        body["name"],
        body["password"],
        body["role"],
        body["username"],
      ), // UserRegistrationRequest | User to add
    };
    var callback = function(response) {
      response.json().then(data => console.error(data));
      return {};
    };
    apiInstance.addUser(opts, callback);
  }

  render() {
    return <RegistrationForm handlePress={this.registerUser} />;
  }
}
