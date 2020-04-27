import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LoginForm from '../Components/LoginForm';
import {CustomAuthenticationApi} from '../CustomApiClient';
import Header from '../Components/Header';
import AsyncStorage from '@react-native-community/async-storage';
var UnimooveApi = require('unimoove_api');

export default class LoginScreen extends React.Component {

  loginUser(body) {
    var apiInstance = new CustomAuthenticationApi();
    let opts = {
      body: new UnimooveApi.LoginRequest(body['password'], body['username']),
    };
    var callback = function(response) {
      if (response.ok) {
        console.log('Inicio de sesión correcto');
        response.json().then(async data => {
          try {
            await AsyncStorage.setItem('ApiKeyAuth', data.apiKey);
          } catch (error) {
            console.error(error)
          }
        });
      } else response.json().then(data => console.log(data));
      return {};
    };
    apiInstance.userLogin(opts, callback);
  }
  render() {
    return (
      <View style={styles.loginScreen} behavior="padding">
        <Header>¡Hola de nuevo!</Header>
        <LoginForm handlePress={this.loginUser} />

        <View style={styles.row}>
          <Text style={styles.label}>¿Aún no tienes una cuenta? </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('RegistrationScreen')
            }>
            <Text style={styles.link}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
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
    color: '#69e000',
  },
});
