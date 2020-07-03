import React, {Component} from 'react';
import {List} from 'react-native-paper';
import {getUser, getCarsFromUser} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cars: {},
    };
    this.setCar = this.setCar.bind(this);
  }

  handleGetCarsResponse(response) {
    response.json().then(data => this.setState({cars: data}));
  }

  handleGetUserResponse(response) {
    response.json().then(data => {
      this.setState({user: data});
      SecurityUtils.authorizeApi([data.username], getCarsFromUser).then(
        this.handleGetCarsResponse.bind(this),
      );
    });
  }

  fetchUserDataWithCars() {
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  componentDidMount() {
    this.fetchUserDataWithCars();
  }

  setCar(car) {
    this.props.handlePress(car);
  }

  render() {
    return (
      <>
        <List.Item
          title="No quiero añadir un coche"
          description="¡No pasa nada! Puedes crear un viaje sin añadir un coche."
          onPress={() => {
            this.setCar(undefined);
          }}
          left={props => <List.Icon {...props} icon="close" />}
        />
        {this.state.cars[0] !== undefined
          ? this.state.cars.map(car => {
              return (
                <List.Item
                  key={car.id}
                  title={car.brand + ' ' + car.model}
                  description={car.plate}
                  left={props => <List.Icon {...props} icon="car" />}
                  onPress={() => {
                    this.setCar(car);
                  }}
                />
              );
            })
          : undefined}
      </>
    );
  }
}
