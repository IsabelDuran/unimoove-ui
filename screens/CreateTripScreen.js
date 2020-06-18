import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {addTrip} from '../client/TripsApi';
import DateInput from '../components/DateInput';
import DateTimeInput from '../components/TimeInput';
import PresentationalForm from '../components/StepForm';
var SecurityUtils = require('../utils/SecurityUtils');
var screenWidth = Dimensions.get('window').width;
var validate = require('validate.js');
const validation = {
  price: {
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: 'El precio del viaje debe ser un número',
    },
    presence: true,
  },
  numberAvailableSeats: {
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: 'El número de asientos debe ser un número',
    },
    presence: true,
  },
};

export default class CreateTripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departurePlace: '',
      arrivalPlace: '',
      departureDateTime: '',
      numberAvailableSeats: '',
      price: '',
      disabledNext: true,
      departureDate: '',
      departureTime: '',
    };
    this.scrollView = React.createRef();
    this.createTrip = this.createTrip.bind(this);
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

  setDate = sentDate => {
    this.setState({
      departureDate: sentDate,
      disabledNext: this.state.departureDate.length > 0,
    });
  };

  setTime = sentTime => {
    this.setState({
      departureTime: sentTime,
      disabledNext: this.state.departureTime.length > 0,
    });
  };

  handleCreateNewTripResponse(response) {
    if (response.ok) {
      console.log('Viaje Creado');
      this.props.navigation.goBack();
    } else {
      console.log(JSON.stringify(response));
    }
  }

  createTrip() {
    let dateTime = this.state.departureDate + this.state.departureTime;

    let tripCreationRequest = {
      arrivalPlace: this.state.arrivalPlace,
      departureDateTime: dateTime,
      departurePlace: this.state.departurePlace,
      numberAvailableSeats: this.state.numberAvailableSeats,
      price: this.state.price,
    };
    console.log(JSON.stringify(tripCreationRequest));
    SecurityUtils.authorizeApi([tripCreationRequest], addTrip).then(
      this.handleCreateNewTripResponse.bind(this),
    );
  }

  handlePageChange(pageNumber) {
    let pages = [
      'departurePlace',
      'arrivalPlace',
      'departureDate',
      'departureTime',
      'numberAvailableSeats',
      'price',
      'infoPage',
    ];
    if (pages[pageNumber] !== 'infoPage')
      this.setState({disabledNext: this.state[pages[pageNumber]].length <= 0});
  }

  render() {
    return (
      <PresentationalForm
        ref={this.scrollView}
        disabledNext={this.state.disabledNext}
        onPageChange={this.handlePageChange.bind(this)}
        handleSend={this.createTrip}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿De dónde vas a salir?</Text>
            <TextInput
              value={this.state.departurePlace}
              mode="outlined"
              label="Lugar de salida"
              onChangeText={value =>
                this.setState({
                  departurePlace: value,
                  disabledNext: value.length <= 0,
                })
              }
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿A dónde vas?</Text>
            <TextInput
              value={this.state.arrivalPlace}
              mode="outlined"
              label="Lugar de llegada"
              onChangeText={value =>
                this.setState({
                  arrivalPlace: value,
                  disabledNext: value.length <= 0,
                })
              }
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿Qué día sales?</Text>
            <DateInput label="Día de salida" onChange={this.setDate} />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿A qué hora sales?</Text>
            <DateTimeInput label="Hora de salida" onChange={this.setTime} />
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              ¿Cuántos asientos tienes disponibles?
            </Text>
            <TextInput
              value={this.state.numberAvailableSeats}
              mode="outlined"
              label="Número de asientos"
              error={
                this.state.numberAvailableSeats.length > 0 &&
                validate.single(
                  this.state.numberAvailableSeats,
                  validation.numberAvailableSeats,
                )
              }
              onChangeText={value =>
                this.setState({
                  numberAvailableSeats: value,
                  disabledNext:
                    value.length <= 0 ||
                    validate.single(value, validation.numberAvailableSeats),
                })
              }
            />
            {this.renderHelperText('numberAvailableSeats')}
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              ¿Cúanto quieres cobrar por tu viaje?
            </Text>
            <TextInput
              value={this.state.price}
              mode="outlined"
              label="Precio"
              error={
                this.state.price.length > 0 &&
                validate.single(this.state.price, validation.price)
              }
              onChangeText={value =>
                this.setState({
                  price: value,
                  disabledNext:
                    value.length <= 0 ||
                    validate.single(value, validation.price),
                })
              }
            />
            {this.renderHelperText('price')}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Datos de tu viaje</Text>
          <Text style={styles.title}>Lugar de salida</Text>
          <Text style={styles.infoText}>{this.state.departurePlace}</Text>
          <Text style={styles.title}>Lugar de llegada</Text>
          <Text style={styles.infoText}>{this.state.arrivalPlace}</Text>
          <Text style={styles.title}>Día de salida</Text>
          <Text style={styles.infoText}>{this.state.departureDate}</Text>
          <Text style={styles.title}>Hora de salida</Text>
          <Text style={styles.infoText}>
            {this.state.departureTime.substring(1, 6)}
          </Text>
          <Text style={styles.title}>Número de asientos disponibles</Text>
          <Text style={styles.infoText}>{this.state.numberAvailableSeats}</Text>
          <Text style={styles.title}>Precio</Text>
          <Text style={styles.infoText}>{this.state.price + '€'}</Text>
        </View>
      </PresentationalForm>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
    width: screenWidth,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#69e000',
    fontSize: 20,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    color: '#12abe7',
    fontSize: 20,
    marginBottom: 5,
  },
  infoText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#525252',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
});
