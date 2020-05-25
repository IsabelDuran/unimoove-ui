import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import DateInput from '../components/DateInput';
import DateTimeInput from '../components/TimeInput';
import PresentationalForm from '../components/StepForm';
var screenWidth = Dimensions.get('window').width;

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
  }

  setDate = sentDate => {
    this.setState({
      departureDate: sentDate,
      disabledNext: this.state.departureDate.length > 0,
    });
  };

  setTime = sentTime => {
    console.log(sentTime);
    this.setState({
      departureTime: sentTime,
      disabledNext: this.state.departureTime.length > 0,
    });
  };

  handlePageChange(pageNumber) {
    let pages = [
      'departurePlace',
      'arrivalPlace',
      'departureDate',
      'departureTime',
      'numberAvailableSeats',
      'price',
    ];
    this.setState({disabledNext: this.state[pages[pageNumber]].length <= 0});
  }

  render() {
    return (
      <PresentationalForm
        ref={this.scrollView}
        disabledNext={this.state.disabledNext}
        onPageChange={this.handlePageChange.bind(this)}>
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
            <Text style={styles.text}>¿A que hora sales?</Text>
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
              onChangeText={value =>
                this.setState({
                  numberAvailableSeats: value,
                  disabledNext: value.length <= 0,
                })
              }
            />
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
              onChangeText={value =>
                this.setState({
                  price: value,
                  disabledNext: value.length <= 0,
                })
              }
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text>¿TE GUSTAN LOS DATOS DE TU VAIJE?</Text>
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
    marginBottom: 20,
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
