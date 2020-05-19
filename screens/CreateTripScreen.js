import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {TextInput, FAB} from 'react-native-paper';
import DateInput from '../components/DateInput';
import DateTimeInput from '../components/DateTimeInput';
import PresentationalForm from '../components/StepForm';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

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

  handlePageChange(pageNumber) {
    let pages = [
      'departurePlace',
      'arrivalPlace',
      'departureDateTime',
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
            <Text style={styles.text}>¿Cuando sales?</Text>
            <DateInput label="Día de salida" />
            <DateTimeInput label="Hora de salida" />
          </View>
        </View>

        <View style={styles.container}>
          <Text>PANTALLA 4</Text>
        </View>
        <View style={styles.container}>
          <Text>PANTALLA 5</Text>
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
