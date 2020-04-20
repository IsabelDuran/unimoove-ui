import React from 'react';
import {Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const showDatepicker = () => {
  <DateTimePicker
  value={new Date()}
  display="calendar"
/>
};

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
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginTop: 20,
          marginRight: 20,
          marginLeft: 20,
        }}>
        {[
          {label: 'Nombre', fieldName: 'name'},
          {label: 'Apellidos', fieldName: 'lastname'},
          {label: 'Fecha nacimiento', fieldName: 'birthdate'},
          {label: 'Nombre de usuario', fieldName: 'username'},
          {label: 'Email', fieldName: 'email'},
          {label: 'Contraseña', fieldName: 'password'},
        ].map(x => (
          <TextInput
            mode="outlined"
            key={x.label}
            label={x.label}
            value={this.state[x.fieldName]}
            onChangeText={value => this.setState({[x.fieldName]: value})}
          />
        ))}
        <Button mode="contained" onPress={() =>{showDatepicker}}>
          Fecha de nacimiento
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            this.props.handlePress(this.state);
          }}>
          Aceptar
        </Button>
      </View>
    );
  }
}
