import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {modifyTripState} from '../client/TripsApi';
var LocalTimeUtils = require('../utils/LocalTimeUtils');
var SecurityUtils = require('../utils/SecurityUtils');

export default class TripDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      trip: this.props.route.params.trip,
    };
    this.cancelTrip = this.cancelTrip.bind(this);
  }

  handleCancelTripResponse(response) {
    if (response.ok) {
      this.props.navigation.goBack();
    } else {
      console.log(JSON.stringify(response));
    }
  }

  cancelTrip(idTrip) {
    let tripStateChangeRequest = {
      newStatus: 2,
    };

    SecurityUtils.authorizeApi(
      [tripStateChangeRequest, idTrip],
      modifyTripState,
    ).then(this.handleCancelTripResponse.bind(this));
  }

  renderStatusTextColor() {
    let color;
    switch (this.state.trip.state) {
      case 0:
        color = '#12ABE7';
        break;
      case 1:
        color = '#69e000';
        break;
      case 2:
        color = 'red';
        break;
      case 3:
        color = '#12ABE7';
        break;
    }
    return color;
  }
  renderStatusText() {
    let message;
    switch (this.state.trip.state) {
      case 0:
        message = 'LIBRE';
        break;
      case 1:
        message = 'LLENO';
        break;
      case 2:
        message = 'CANCELADO';
        break;
      case 3:
        message = 'PASADO';
        break;
    }
    return message;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/seats.png')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Datos de mi viaje</Text>
        </View>
        <Text style={styles.text}>
          Estado de mi viaje:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.renderStatusText()}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Salida de:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.trip.departurePlace}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Llegada a:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.trip.arrivalPlace}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Día y hora de salida:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {LocalTimeUtils.beautifulyDateTime(
              this.state.trip.departureDateTime,
            )}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Precio:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.trip.price + '€'}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Teléfono:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.trip.phone}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Número de sitios disponibles:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.trip.numberAvailableSeats}
          </Text>
        </Text>
        <Divider />
        {this.state.trip.state !== 2 ? (
          <Button
            color="red"
            style={styles.button}
            onPress={() => {
              Alert.alert(
                'Cancelar Viaje',
                '¿Estás seguro de que desea cancelar el viaje?',
                [
                  {
                    text: 'No',
                    style: 'cancel',
                  },
                  {
                    text: 'Sí',
                    onPress: () => this.cancelTrip(this.state.trip.id),
                  },
                ],
                {cancelable: false},
              );
            }}>
            Cancelar viaje
          </Button>
        ) : (
          undefined
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'OpenSans-Bold',
    color: '#69e000',
    fontSize: 20,
    marginTop: 5,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#2D383E',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
