import React from 'react';
import {StyleSheet ,Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

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
      <View style={{flex:1}}>
        <Text style={styles.header}>Registro</Text>
        <View
          style={{
            flex: 8,
            marginTop: 20,
            marginBottom: 20,
            marginRight: 20,
            marginLeft: 20,
          }}>
          {[
            {label: 'Nombre', fieldName: 'name'},
            {label: 'Apellidos', fieldName: 'lastname'},
            {label: 'Fecha nacimiento', fieldName: 'birthdate'},
            {label: 'Nombre de usuario', fieldName: 'username'},
            {label: 'Email', fieldName: 'email'},
            {
              label: 'Contraseña',
              fieldName: 'password',
              isPassword: true,
              isSecureTextEntry: true,
            },
          ].map(x => (
            <TextInput
              mode="flat"
              key={x.label}
              label={x.label}
              secureTextEntry={x.isSecureTextEntry}
              password={x.isPassword}
              value={this.state[x.fieldName]}
              onChangeText={value => this.setState({[x.fieldName]: value})}
            />
          ))}
          <Button
            mode="outlined"
            color="#15abe7"
            onPress={() => {
              showDatepicker;
            }}>
            Fecha de nacimiento
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Button
            mode="contained"
            dark={true}
            color="#15abe7"
            onPress={() => {
              this.props.handlePress(this.state);
            }}>
            Cancelar
          </Button>
          <Button
            mode="contained"
            dark={true}
            color="#69e000"
            onPress={() => {
              this.props.handlePress(this.state);
            }}>
            Aceptar
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    regform: {
      alignSelf: 'stretch',
    },
    header: {
      fontSize: 24,
    }
});