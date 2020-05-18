import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, FAB} from 'react-native-paper';
import DateInput from '../components/DateInput';
import PresentationalForm from '../components/PresentationalForm';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class CreateTripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalPlace: '',
      departureDateTime: '',
      departurePlace: '',
      numberAvailableSeats: '',
      price: '',
    };
    this.scrollView = React.createRef();
  }

  render() {
    return (
      <PresentationalForm ref={this.scrollView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿De donde vas a salir?</Text>
            <TextInput
              value={this.state.departurePlace}
              mode="outlined"
              label="Lugar de salida"
              onChangeText={value => this.setState({departurePlace: value})}
            />
          </View>
          <FAB
            style={styles.fab}
            icon="arrow-right"
            disabled={!this.state.departurePlace}
            onPress={() => {
              this.scrollView.current.goNext();
            }}
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿A donde vas?</Text>
            <TextInput
              value={this.state.arrivalPlace}
              mode="outlined"
              label="Lugar de llegada"
              onChangeText={value => this.setState({arrivalPlace: value})}
            />
          </View>
          <FAB
            style={styles.fab}
            icon="arrow-right"
            disabled={!this.state.arrivalPlace}
            onPress={() => {
              this.scrollView.current.goNext();
            }}
          />
          <FAB
            style={styles.fabLeft}
            icon="arrow-left"
            onPress={() => {
              this.scrollView.current.goBack();
            }}
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>¿Cuando sales?</Text>
            <DateInput />
          </View>
          <FAB
            style={styles.fab}
            icon="arrow-right"
            disabled={!this.state.arrivalPlace}
            onPress={() => {
              this.scrollView.current.goNext();
            }}
          />
          <FAB
            style={styles.fabLeft}
            icon="arrow-left"
            onPress={() => {
              this.scrollView.current.goBack();
            }}
          />
        </View>

        <View style={styles.container}>
          <Text>PANTALLA 4</Text>
        </View>
        <View style={styles.container}>
          <Text>PANTALLA 5</Text>
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
