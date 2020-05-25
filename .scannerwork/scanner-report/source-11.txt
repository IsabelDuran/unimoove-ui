import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Appbar, FAB, Card, Button} from 'react-native-paper';
import {getUser, getCarsFromUser, deleteCar} from '../client/UsersApi';
import LoadingIndicator from '../components/LoadingIndicator';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');

export default class MyCarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cars: {},
      loading: true,
    };
    this.deleteCar = this.deleteCar.bind(this);
    this.handleDeteleCarResponse = this.handleDeteleCarResponse.bind(this);
    this.fetchUserDataWithCars = this.fetchUserDataWithCars.bind(this);
  }

  handleDeteleCarResponse(response) {
    if (response.ok) {
      console.log('Coche borrado');
      this.setState({cars: {}});
      this.fetchUserDataWithCars();
    } else {
      console.log('Error');
    }
  }

  deleteCar(plate) {
    this.setState({loading: true});
    SecurityUtils.authorizeApi(
      [plate, this.state.user.username],
      deleteCar,
    ).then(this.handleDeteleCarResponse);
  }

  handleGetUserResponse(response) {
    response.json().then(data => {
      this.setState({user: data});
      SecurityUtils.authorizeApi([data.username], getCarsFromUser).then(
        this.handleGetCarsResponse.bind(this),
      );
    });
  }

  handleGetCarsResponse(response) {
    response.json().then(data => this.setState({cars: data, loading: false}));
  }

  fetchUserDataWithCars() {
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener(
      'focus',
      this.fetchUserDataWithCars.bind(this),
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
                source={require('../assets/img/car.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Mis coches</Text>
            </View>
            {this.state.cars[0] === undefined ? (
              <>
                <View style={styles.container}>
                  <Text style={styles.label}>
                    Parece que no has añadido ningún coche aún
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CreateCarScreen', {
                        username: this.state.user.username,
                      })
                    }>
                    <Text style={styles.link}>
                      ¿Quieres añadir un coche ahora?
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              this.state.cars.map(car => {
                return (
                  <Card key={car.plate}>
                    <Card.Title
                      title={car.brand + ' ' + car.model}
                      subtitle={car.plate}
                    />
                    <Card.Actions>
                      <Button
                        onPress={() =>
                          this.props.navigation.navigate('EditCarScreen', {
                            car: car,
                          })
                        }>
                        Editar
                      </Button>
                      <Button
                        color="red"
                        onPress={() =>
                          Alert.alert(
                            'Confirmación',
                            '¿Está seguro de que quiere borrar el coche? Los coches eliminados no pueden recuperarse.',
                            [
                              {
                                text: 'Cancelar',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {
                                text: 'Si, estoy seguro',
                                onPress: () => this.deleteCar(car.plate),
                              },
                            ],
                            {cancelable: false},
                          )
                        }>
                        Eliminar
                      </Button>
                    </Card.Actions>
                  </Card>
                );
              })
            )}
          </ScrollView>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => {
              if (this.state.cars.length === 5) {
                Alert.alert(
                  '¡Ups!',
                  'No puedes añadir más coches porque has llegado al máximo permitido',
                  [
                    {
                      text: 'Ok',
                      onPress: () => console.log('Ok Pressed'),
                      style: 'cancel',
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                this.props.navigation.navigate('CreateCarScreen', {
                  username: this.state.user.username,
                });
              }
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
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#69e000',
    fontSize: 20,
    marginTop: 5,
  },
  background: {
    flex: 1,
    backgroundColor: '#fafafa',
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
  image: {
    width: 100,
    height: 100,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
