import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Appbar, Button, Card} from 'react-native-paper';
import {getUser, getReservationsFromUser} from '../client/UsersApi';
import {modifyReservationState} from '../client/ReservationsApi';
import LoadingIndicator from '../components/LoadingIndicator';
import { DrawerActions } from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');
var LocalTimeUtils = require('../utils/LocalTimeUtils');

export default class MyReservationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      reservations: [],
      paginationInfo: {},
      loading: true,
      page: 0,
    };
    this.cancelReservation = this.cancelReservation.bind(this);
  }

  handleCancelReservation(response) {
    if (response.ok) {
      this.setState({reservations: [], page: 0});
      this.fetchUserData();
    } else {
      console.log(JSON.stringify(response));
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

  showMoreReservations() {
    this.setState({page: this.state.page + 1}, () => this.fetchUserData());
  }

  handleGetReservationsResponse(response) {
    response.json().then(data =>
      this.setState({
        reservations: this.state.reservations.concat(data.pages),
        paginationInfo: data.paginationInfo,
        loading: false,
      }),
    );
  }

  handleGetUserResponse(response) {
    response.json().then(data => {
      this.setState({user: data});
      SecurityUtils.authorizeApi(
        [this.state.page, 5, data.username],
        getReservationsFromUser,
      ).then(this.handleGetReservationsResponse.bind(this));
    });
  }

  fetchUserData() {
    if (this.state.page === 0) this.setState({loading: true});
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener(
      'focus',
      this.fetchUserData.bind(this),
    );

    this._outOfFocus = this.props.navigation.addListener('blur', () =>
      this.setState({reservations: [], page: 0}),
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    } else {
      return (
        <>
          <Appbar.Header dark={true}>
          <Appbar.Action icon="menu" onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
            <Text style={styles.logo}>Unimoove</Text>
          </Appbar.Header>
          <ScrollView style={styles.background}>
            <View style={styles.container}>
              <Image
                source={require('../assets/img/reservation.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Mis reservas</Text>
            </View>
            {this.state.paginationInfo.totalElements === 0 ? (
              <>
                <View style={styles.container}>
                  <Text style={styles.label}>
                    Parece que no has reservado ningún viaje aún
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('SearchTripScreen', {
                        username: this.state.user.username,
                      })
                    }>
                    <Text style={styles.link}>
                      ¿Por qué no buscas algún viaje?
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              this.state.reservations.map(reservation => {
                return (
                  <Card key={reservation.id}>
                    <Card.Content>
                      <Text style={styles.tripInfo}>
                        De: {reservation.trip.departurePlace}
                      </Text>
                      <Text style={styles.tripInfo}>
                        A: {reservation.trip.arrivalPlace}
                      </Text>
                      <Text style={styles.tripInfo}>
                        Fecha: {LocalTimeUtils.beautifulyDateTime(reservation.trip.departureDateTime)}
                      </Text>
                    </Card.Content>
                    <Card.Actions>
                      <Button
                        onPress={() =>
                          this.props.navigation.navigate(
                            'ReservationDetailScreen',
                            {
                              reservation: reservation,
                              user: this.state.user,
                            },
                          )
                        }>
                        Detalles
                      </Button>
                      {reservation.status !== 3 ? (
                        <Button
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
                                    this.cancelReservation(reservation.id),
                                },
                              ],
                              {cancelable: false},
                            );
                          }}>
                          Cancelar Reserva
                        </Button>
                      ) : (
                        undefined
                      )}
                    </Card.Actions>
                  </Card>
                );
              })
            )}
            {this.state.page !== this.state.paginationInfo.totalPages - 1 &&
            this.state.paginationInfo.totalElements !== 0 ? (
              <Button onPress={this.showMoreReservations.bind(this)}>
                MOSTRAR MÁS
              </Button>
            ) : (
              undefined
            )}
          </ScrollView>
        </>
      );
    }
  }
}
const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Pacifico-Regular',
    color: 'white',
    fontSize: 25,
    marginLeft: 14,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  background: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#69e000',
    fontSize: 20,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  label: {
    fontSize: 16,
    color: '#525252',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#69e000',
  },
  tripInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#525252',
  },
});
