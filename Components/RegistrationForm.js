import React from 'react';
import {Text, Button, View} from 'react-native';
import {TextInput} from 'react-native-paper';

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
  render() {
    return (
      <View>
        {[
          {label: 'Nombre', fieldName: 'name'},
          {label: 'Apellidos', fieldName: 'Apellidos'},
          {label: 'Fecha nacimiento', fieldName: 'birthdate'},
          {label: 'Nombre de usuario', fieldName: 'username'},
          {label: 'Email', fieldName: 'email'},
          {label: 'Contraseña', fieldName: 'password'},
        ].map(x => (
          <TextInput
            key={x.label}
            label={x.label}
            value={this.state[x.fieldName]}
            onChangeText={value => this.setState({[x.fieldName]: value})}
          />
        ))}
        <Button
          title="Aceptar"
          onPress={() => {
            this.props.handlePress(this.state);
          }}
        />
      </View>
    );
  }
}
