import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
var validate = require('validate.js');
const validation = {
  plate: {
    format: {
      pattern: '[a-zA-Z0-9]+',
      flags: 'i',
      message: 'La matrícula debe ser alfanúmerica y no debe contener espacios',
    },
    presence: true,
  },
  seats: {
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: 'El número de asientos solo puede ser un número',
    },
    presence: true,
  },
};
export default class CarCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      plate: '',
      seats: '',
    };
  }

  isFormIncompleteOrIncorrect() {
    return (
      validate(this.state, validation) !== undefined ||
      !this.state.brand ||
      !this.state.model ||
      !this.state.plate ||
      !this.state.seats
    );
  }

  renderHelperText(fieldName) {
    if (this.state[fieldName].length > 0) {
      let validationResult = validate.single(
        this.state[fieldName],
        validation[fieldName],
      );
      if (validationResult !== undefined) {
        return (
          <HelperText type="error" padding="none">
            {validationResult[0]}
          </HelperText>
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {[
          {label: 'Marca del coche', fieldName: 'brand'},
          {
            label: 'Modelo',
            fieldName: 'model',
          },
          {
            label: 'Matrícula',
            fieldName: 'plate',
          },
          {
            label: 'Número de asientos',
            fieldName: 'seats',
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
              value={this.state[x.fieldName]}
              autoCompleteType={x.autoCompleteType}
              onChangeText={value => this.setState({[x.fieldName]: value})}
            />
            {this.renderHelperText(x.fieldName)}
          </View>
        ))}

        <Button
          style={styles.button}
          mode="contained"
          dark={true}
          disabled={this.isFormIncompleteOrIncorrect()}
          color="#69e000"
          onPress={() => {
            this.props.handlePress(this.state);
          }}>
          Añadir coche
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
