import React, {Component} from 'react';
import {Text, View, StyleSheet, Keyboard} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {getUser} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: true,
    };
  }

  handleGetUserResponse(response) {
    response.json().then(data => this.setState({user: data, loading: false}));
  }

  componentDidMount() {
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  render() {
    return (
      <View style={styles.background}>
        <Appbar.Header dark={true}>
          <Text style={styles.logo}>Unimoove</Text>
        </Appbar.Header>
        <View style={styles.container}>
          <Text style={styles.text}>Mi Perfil</Text>
          <TextInput
            label="Nombre de usuario"
            value={this.state.user.username}
            onFocus={() => {
              Keyboard.dismiss();
              this.props.navigation.navigate('UsernameChangeScreen');
            }}
          />
          <TextInput
            label="Nombre"
            value={this.state.user.name}
            onFocus={() => {
              Keyboard.dismiss();
              this.props.navigation.navigate('UsernameChangeScreen');
            }}
          />
          <TextInput
            label="Apellidos"
            value={this.state.user.lastname}
            onFocus={() => {
              Keyboard.dismiss();
              this.props.navigation.navigate('UsernameChangeScreen');
            }}
          />
          <TextInput
            label="Email"
            value={this.state.user.email}
            onFocus={() => {
              Keyboard.dismiss();
              this.props.navigation.navigate('UsernameChangeScreen');
            }}
          />
          <TextInput
            label="Contraseña"
            value="***********"
            onFocus={() => {
              Keyboard.dismiss();
              this.props.navigation.navigate('UsernameChangeScreen');
            }}
          />
          <Button
            color="#69e000"
            style={styles.button}
            onPress={() => console.log('Cerrar Sesión')}>
            Cerrar Sesión
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Pacifico-Regular',
    color: 'white',
    fontSize: 25,
    marginLeft: 14,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'baseline',
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#575757',
    fontSize: 20,
  },
  button: {
    marginLeft: 0,
    marginTop: 24,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonText: {
    textAlign: 'left',
    margin: 0,
  },
});
