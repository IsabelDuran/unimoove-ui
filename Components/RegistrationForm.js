import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../Components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateInput from './DateInput';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      email: '',
      role: 0,
      Apellidos: '',
      name: '',
      password: '',
      gender: 0,
      username: '',
    };
  }

  setBirthdate = sentBirthdate => {
    this.setState(({birthdate: sentBirthdate}));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.regform} behavior="padding">
        <Header>Registro</Header>
        <View style={styles.container}>
          {[
            {label: 'Nombre', fieldName: 'name'},
            {label: 'Apellidos', fieldName: 'lastname'},
            {label: 'Nombre de usuario', fieldName: 'username'},
            {label: 'Email', fieldName: 'email'},
            {
              label: 'Contraseña',
              fieldName: 'password',
              isPassword: true,
              isSecureTextEntry: true,
            },
            {
              label: 'Repetir contraseña',
              fieldName: 'passwordRepeat',
              isPassword: true,
              isSecureTextEntry: true,
            },
          ].map(x => (
            <TextInput
              mode="outlined"
              underlineColor="transparent"
              key={x.label}
              label={x.label}
              secureTextEntry={x.isSecureTextEntry}
              password={x.isPassword}
              value={this.state[x.fieldName]}
              onChangeText={value => this.setState({[x.fieldName]: value})}
            />
          ))}

          <DateInput
            label="Fecha nacimiento"
            onChange={this.setBirthdate}
          />

          <Button
            style={styles.button}
            mode="contained"
            dark={true}
            color="#69e000"
            onPress={() => {
              this.props.handlePress(this.state);
            }}>
            Aceptar
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    color: '#15abe7',
  },
});
