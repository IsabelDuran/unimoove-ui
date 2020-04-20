import React from 'react';
import {Text, Alert} from 'react-native';
import RegistrationForm from '../Components/RegistrationForm';

export default class RegistrationScreen extends React.Component {
    registerUser(body){
        console.log(JSON.stringify(body));
    }

    render() {
    return <RegistrationForm handlePress={this.registerUser}></RegistrationForm>;
  }
}