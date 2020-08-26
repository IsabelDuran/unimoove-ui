import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {modifyReservationState} from '../client/ReservationsApi';
var LocalTimeUtils = require('../utils/LocalTimeUtils');
var SecurityUtils = require('../utils/SecurityUtils');

export default class ReservationDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      reservation: this.props.route.params.reservation,
    };
    this.cancelReservation = this.cancelReservation.bind(this);
  }

  handleCancelReservation(response) {
    if (response.ok) {
      this.props.navigation.goBack();
    } else {
      console.logÇ(JSON.stringify(response));
    }
  }

  cancelReservation(idReservation) {
    let reservationStateChangeRequest = {
      newState: 3,
    };
    SecurityUtils.authorizeApi(
      [reservationStateChangeRequest, idReservation],
      modifyReservationState,
    ).then(this.handleCancelReservation.bind(this));
  }

  renderStatusTextColor() {
    let color;
    switch (this.state.reservation.status) {
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
        color = 'red';
        break;
      case 4:
        color = '#12ABE7';
        break;
    }
    return color;
  }
  renderStatusText() {
    let message;
    switch (this.state.reservation.status) {
      case 0:
        message = 'PENDIENTE DE ACEPTACIÓN';
        break;
      case 1:
        message = 'ACEPTADA';
        break;
      case 2:
        message = 'DENEGADA';
        break;
      case 3:
        message = 'CANCELADA';
        break;
      case 4:
        message = 'PASADA';
        break;
    }
    return message;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/fullcar.png')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Datos de mi reserva</Text>
        </View>
        <Text style={styles.text}>
          Estado de mi reserva:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.renderStatusText()}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Fecha de realización de la reserva:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {LocalTimeUtils.beautifulyDateTime(
              this.state.reservation.dateTimeReservation,
            )}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Salida de:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.trip.departurePlace}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Llegada a:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.trip.arrivalPlace}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Día y hora de salida:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {LocalTimeUtils.beautifulyDateTime(
              this.state.reservation.trip.departureDateTime,
            )}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Precio:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.trip.price + '€'}
          </Text>
        </Text>
        <Divider />
        <Text style={styles.text}>
          Viaje creado por:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.user.name +
              ' ' +
              this.state.reservation.user.lastname}
          </Text>
        </Text>
        <Divider />
        {this.state.reservation.status == 1 ? (<><Divider />
        <Text style={styles.text}>
          Teléfono:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.trip.phone}
          </Text>
        </Text>
        <Divider /></>
        ) : undefined}
        {this.state.reservation.status == 1 ? (<><Divider />
        <Text style={styles.text}>
          Coche:{'\n'}
          <Text style={{color: this.renderStatusTextColor()}}>
            {this.state.reservation.trip.car.brand + ' ' + this.state.reservation.trip.car.model}
          </Text>
        </Text>
        <Divider /></>
        ) : undefined}
        {this.state.reservation.status < 2 ? (
          <Button
            style={styles.button}
            color="red"
            onPress={() => {
              Alert.alert(
                'Cancelar reserva',
                '¿Estás seguro de que desea cancelar la reserva?',
                [
                  {
                    text: 'No',
                    style: 'cancel',
                  },
                  {
                    text: 'Sí',
                    onPress: () =>
                      this.cancelReservation(this.state.reservation.id),
                  },
                ],
                {cancelable: false},
              );
            }}>
            Cancelar reserva
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
