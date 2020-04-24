import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RegistrationForm from '../Components/RegistrationForm';
import {CustomUsersApi} from '../CustomApiClient';
import Header from '../Components/Header';
var UnimooveApi = require('unimoove_api');

export default class RegistrationScreen extends React.Component {
  registerUser(body) {
    var apiInstance = new CustomUsersApi();
    let opts = {
      body: new UnimooveApi.UserRegistrationRequest(
        body['birthdate'],
        body['email'],
        body['gender'],
        body['lastname'],
        body['name'],
        body['password'],
        body['role'],
        body['username'],
      ), // UserRegistrationRequest | User to add
    };
    var callback = function(response) {
      if (response.ok) console.log('Usuario registrado');
      else response.json().then(data => console.log(data));
      return {};
    };
    apiInstance.addUser(opts, callback);
  }

  render() {
    return (
      <View style={styles.registrationScreen}  behavior="padding">
        <Header>Registro</Header>
        <RegistrationForm
          handlePress={this.registerUser}
        />
        <View style={styles.row}>
          <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registrationScreen: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },
  label: {
    color: '#525252',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#15abe7',
  },
});