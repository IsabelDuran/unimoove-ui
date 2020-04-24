import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import DateInput from './DateInput';
var validate = require('validate.js');
const validation = {
  email: {
    email: {
      message: 'Por favor introduzca un email válido',
    },
    presence: true,
  },
  username: {
      format: {
        pattern: '[a-zA-Z0-9]+',
        flags: 'i',
        message:
          'El nombre de usuario debe ser alfanúmerico y no debe contener espacios',
      },
      presence: true,
  },
};

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      email: '',
      // role: 0,
      lastname: '',
      name: '',
      password: '',
      // gender: 0,
      username: '',
      passwordRepeat: '',
    };
    this.renderHelperText = this.renderHelperText.bind(this);
  }

  setBirthdate = sentBirthdate => {
    this.setState({birthdate: sentBirthdate});
  };

  renderHelperText(fieldName) {
    if (this.state[fieldName].length > 0) {
      let validationResult = validate.single(
        this.state[fieldName],
        validation[fieldName],
      );
      if (validationResult != undefined)
        return (
          <HelperText type="error" padding="none">
            {validationResult[0]}
          </HelperText>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {[
          {label: 'Nombre', fieldName: 'name'},
          {label: 'Apellidos', fieldName: 'lastname'},
          {
            label: 'Nombre de usuario',
            fieldName: 'username',
          },
          {
            label: 'Email',
            fieldName: 'email',
            autoCompleteType: 'email',
          },
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
          <View key={x.label}>
            <TextInput
              mode="outlined"
              underlineColor="transparent"
              autoCorrect={false}
              label={x.label}
              error={
                this.state[x.fieldName].length > 0 &&
                validate.single(
                  this.state[x.fieldName],
                  validation[x.fieldName],
                )
              }
              secureTextEntry={x.isSecureTextEntry}
              password={x.isPassword}
              value={this.state[x.fieldName]}
              autoCompleteType={x.autoCompleteType}
              onChangeText={value => this.setState({[x.fieldName]: value})}
            />
            {this.renderHelperText(x.fieldName)}
          </View>
        ))}

        <DateInput label="Fecha nacimiento" onChange={this.setBirthdate} />

        <Button
          style={styles.button}
          mode="contained"
          dark={true}
          disabled={validate(this.state, validation) != undefined}
          color="#69e000"
          onPress={() => {
            this.props.handlePress(this.state);
          }}>
          Aceptar
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  button: {
    marginTop: 24,
  },
});
