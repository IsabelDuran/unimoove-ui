import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {modifyReservationState} from '../client/ReservationsApi';
import {searchTripReservations} from '../client/TripsApi';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');
var LocalTimeUtils = require('../utils/LocalTimeUtils');

const STATE_DENIED = 2;
const STATE_ACCEPTED = 1;

export default class ManageReservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      trip: this.props.route.params.trip,
      reservations: [],
      paginationInfo: {},
    };
    this.manageReservation = this.manageReservation.bind(this);
  }

  handleManageReservation(response) {
    if (response.ok) {
      this.setState({reservations: [], page: 0});
      this.fetchTripReservations();
    } else {
      console.log(JSON.stringify(response));
    }
  }

  manageReservation(idReservation, value) {
    let reservationStateChangeRequest = {
      newState: value,
    };
    SecurityUtils.authorizeApi(
      [reservationStateChangeRequest, idReservation],
      modifyReservationState,
    ).then(this.handleManageReservation.bind(this));
  }

  handleGetTripReservationsResponse(response) {
    console.log(JSON.stringify(response));
    if (response.ok) {
      response.json().then(data => {
        this.setState({
          reservations: data.pages,
          paginationInfo: data.paginationInfo,
        });
      });
    } else {
      console.log(JSON.stringify(response));
    }
  }

  fetchTripReservations() {
    SecurityUtils.authorizeApi(
      [this.state.trip.id, 0, 10],
      searchTripReservations,
    ).then(this.handleGetTripReservationsResponse.bind(this));
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener(
      'focus',
      this.fetchTripReservations.bind(this),
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.headerText}>Reservas para mi viaje:</Text>
        <View style={styles.tripInfoContainer}>
          <Text style={styles.infoText}>
            De:{' '}
            <Text style={styles.departureText}>
              {this.state.trip.departurePlace}{' '}
            </Text>
          </Text>
          <Text style={styles.infoText}>
            A:{' '}
            <Text style={styles.arrivalText}>
              {this.state.trip.arrivalPlace}
            </Text>
          </Text>
          <Text style={styles.dateText}>
            {LocalTimeUtils.beautifulyDateTime(
              this.state.trip.departureDateTime,
            )}
          </Text>
        </View>
        {this.state.paginationInfo.totalElements === 0 ? (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../assets/img/triste.png')}
            />
            <Text style={styles.infoText}>
              No hay ninguna reserva para tu viaje
            </Text>
          </View>
        ) : (
          this.state.reservations.map(reservation => {
            return (
              <Card key={reservation.id}>
                <Card.Content>
                  <Text style={styles.tripInfo}>
                    Hora de la reserva: {reservation.dateTimeReservations}
                  </Text>
                  <Text style={styles.tripInfo}>
                    Reservado por:{' '}
                    {reservation.user.name + ' ' + reservation.user.lastname}
                  </Text>
                  <Text>Estado: {reservation.state}</Text>
                </Card.Content>
                {reservation.state === 0 ? (
                  <Card.Actions>
                    <Button
                      onPress={() => {
                        Alert.alert(
                          'Aceptar reserva',
                          '¿Estás seguro de que desea aceptar la reserva?',
                          [
                            {
                              text: 'No',
                              style: 'cancel',
                            },
                            {
                              text: 'Sí',
                              onPress: () =>
                                this.manageReservation(
                                  reservation.id,
                                  STATE_ACCEPTED,
                                ),
                            },
                          ],
                          {cancelable: false},
                        );
                      }}>
                      Aceptar reserva
                    </Button>
                    <Button
                      onPress={() => {
                        Alert.alert(
                          'Rechazar reserva',
                          '¿Estás seguro de que desea rechazar la reserva?',
                          [
                            {
                              text: 'No',
                              style: 'cancel',
                            },
                            {
                              text: 'Sí',
                              onPress: () =>
                                this.manageReservation(
                                  reservation.id,
                                  STATE_DENIED,
                                ),
                            },
                          ],
                          {cancelable: false},
                        );
                      }}
                      color="red">
                      Rechazar reserva
                    </Button>
                  </Card.Actions>
                ) : (
                  undefined
                )}
              </Card>
            );
          })
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tripInfoContainer: {
    padding: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#12abe7',
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    padding: 20,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  link: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: '#12abe7',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    color: '#525252',
    marginLeft: 10,
    marginTop: 10,
  },
  infoText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    color: '#525252',
  },
  dateText: {
    marginLeft: 180,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: '#525252',
  },
  departureText: {
    color: '#12abe7',
  },
  arrivalText: {
    color: '#69e000',
  },
});
