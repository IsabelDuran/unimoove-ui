import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Appbar, FAB, Card, Button} from 'react-native-paper';
import {getUser, getPaginatedTripsFromUser} from '../client/UsersApi';
import LoadingIndicator from '../components/LoadingIndicator';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');

export default class MyTripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      trips: [],
      paginationInfo: {},
      loading: true,
      page: 0,
    };
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

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener(
      'focus',
      this.fetchUserDataWithTrips.bind(this),
    );

    this._outOfFocus = this.props.navigation.addListener('blur', () =>
      this.setState({trips: [], page: 0}),
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
            <Text style={styles.logo}>Unimoove</Text>
          </Appbar.Header>
          <ScrollView style={styles.background}>
            <View style={styles.container}>
              <Image
                source={require('../assets/img/trip.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Mis viajes</Text>
            </View>
            {this.state.paginationInfo.totalElements === 0 ? (
              <>
                <View style={styles.container}>
                  <Text style={styles.label}>
                    Parece que no has añadido ningún viaje aún
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CreateTripScreen', {
                        username: this.state.user.username,
                      })
                    }>
                    <Text style={styles.link}>
                      ¿Quieres añadir un viaje ahora?
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              this.state.trips.map(trip => {
                return (
                  <Card key={trip.id}>
                    <Card.Content>
                      <Text style={styles.tripInfo}>
                        De: {trip.departurePlace}
                      </Text>
                      <Text style={styles.tripInfo}>
                        A: {trip.arrivalPlace}
                      </Text>
                    </Card.Content>
                    <Card.Actions>
                      <Button>Editar viaje</Button>
                      <Button color="red">Eliminar</Button>
                    </Card.Actions>
                  </Card>
                );
              })
            )}
            {this.state.page !== this.state.paginationInfo.totalPages - 1 &&
            this.state.paginationInfo.totalElements !== 0 ? (
              <Button onPress={this.showMoreTrips.bind(this)}>
                MOSTRAR MÁS
              </Button>
            ) : (
              undefined
            )}
          </ScrollView>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => {
              this.props.navigation.navigate('CreateTripScreen', {
                username: this.state.user.username,
              });
            }}
          />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  tripInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#69e000',
  },
});
