import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../Components/Header';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
    };
  }

  render() {
    return (
      <View style={styles.regform} behavior="padding">
        <Header>¡Hola de nuevo!</Header>
        <View style={styles.container}>
          {[
            {label: 'Nombre de usuario', fieldName: 'username'},
            {
              label: 'Contraseña',
              fieldName: 'password',
              isPassword: true,
              isSecureTextEntry: true,
            },
          ].map(x => (
            <TextInput
              mode="outlined"
              underlineColor="transparent"
              autoCorrect={false}
              key={x.label}
              label={x.label}
              secureTextEntry={x.isSecureTextEntry}
              password={x.isPassword}
              value={this.state[x.fieldName]}
              autoCompleteType={x.autoCompleteType}
              onChangeText={value => this.setState({[x.fieldName]: value})}
            />
          ))}

          <Button
            style={styles.button}
            mode="contained"
            dark={true}
            color="#69e000"
            onPress={() => {
              this.props.handlePress(this.state);
            }}>
            Iniciar Sesión
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>¿Aún no tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },
  container: {
    width: '100%',
    marginVertical: 12,
  },
  button: {
    marginTop: 24,
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
