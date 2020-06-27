import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {addReservation} from '../client/ReservationsApi';
import {getUser, getPaginatedTripsFromUser} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class SearchTripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: this.props.route.params.trips,
      paginationInfo: this.props.route.params.paginationInfo,
      departurePlace: this.props.route.params.departurePlace,
      arrivalPlace: this.props.route.params.arrivalPlace,
      page: 0,
    };
    this.reservateTrip = this.reservateTrip.bind(this);
  }

  showMoreTrips() {
    this.setState({page: this.state.page + 1}, () =>
      this.fetchUserDataWithTrips(),
    );
  }

  handleGetTripsResponse(response) {
    response.json().then(data =>
      this.setState({
        trips: this.state.trips.concat(data.pages),
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
        getPaginatedTripsFromUser,
      ).then(this.handleGetTripsResponse.bind(this));
    });
  }
  fetchUserDataWithTrips() {
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  handleAddReservationResponse(response) {
    if (response.ok) {
      console.log('Reserva Creada');
      this.props.navigation.navigate('MyReservationsScreen');
    } else {
      console.log(JSON.stringify(response));
    }
  }

  reservateTrip(id) {
    let body = {
      idTrip: id,
    };
    SecurityUtils.authorizeApi([body], addReservation).then(
      this.handleAddReservationResponse.bind(this),
    );
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        {this.state.paginationInfo.totalElements !== 0 ? (
          <Text style={styles.headerText}>
            Viajes de{' '}
            <Text style={styles.departureText}>
              {this.state.departurePlace}
            </Text>{' '}
            a <Text style={styles.arrivalText}>{this.state.arrivalPlace}</Text>
          </Text>
        ) : (
          undefined
        )}
        {this.state.paginationInfo.totalElements === 0 ? (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../assets/img/triste.png')}
            />
            <Text style={styles.text}>
              Lo sentimos pero no tenemos ningún viaje con estas características
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.link}>Puedes probar a buscar otro viaje</Text>
            </TouchableOpacity>
          </View>
        ) : (
          this.state.trips.map(trip => {
            if (trip.state === 0) {
              return (
                <Card key={trip.id}>
                  <Card.Content>
                    <Text style={styles.tripInfo}>
                      De: {trip.departurePlace}
                    </Text>
                    <Text style={styles.tripInfo}>A: {trip.arrivalPlace}</Text>
                    <Text style={styles.tripInfo}>
                      Hora:{' '}
                      {new Date(
                        Date.parse(trip.departureDateTime),
                      ).toLocaleString()}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      onPress={() => {
                        Alert.alert(
                          'Reservar Viaje',
                          '¿Estás seguro de que desea reservar el viaje?',
                          [
                            {
                              text: 'Cancelar',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {
                              text: 'Sí',
                              onPress: () => this.reservateTrip(trip.id),
                            },
                          ],
                          {cancelable: false},
                        );
                      }}>
                      Reservar
                    </Button>
                  </Card.Actions>
                </Card>
              );
            }
          })
        )}
        {this.state.page !== this.state.paginationInfo.totalPages - 1 &&
        this.state.paginationInfo.totalElements !== 0 ? (
          <Button onPress={this.showMoreTrips.bind(this)}>MOSTRAR MÁS</Button>
        ) : (
          undefined
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  image: {
    width: 140,
    height: 140,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: '#525252',
    marginTop: 30,
    textAlign: 'center',
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
    marginBottom: 10,
    marginTop: 10,
  },
  departureText: {
    color: '#12abe7',
  },
  arrivalText: {
    color: '#69e000',
  },
});
