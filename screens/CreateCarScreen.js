import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CarCreationForm from '../components/CarCreationForm';
import ErrorText from '../components/ErrorText';
import {addCar} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class CreateCarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorVisible: false,
    };
    this.createNewCar = this.createNewCar.bind(this);
  }

  handleCreateNewCarResponse(response) {
    console.log(JSON.stringify(response));
    console.log('Coche creado');
    this.props.navigation.goBack();
  }

  createNewCar(carCreationRequest) {
    SecurityUtils.authorizeApi(
      [carCreationRequest, this.props.route.params.username],
      addCar,
    ).then(this.handleCreateNewCarResponse.bind(this));
  }

  render() {
    return (
      <View style={styles.container} behavior="padding">
        <Image source={require('../assets/img/car.png')} style={styles.image} />
        <Text style={styles.text}>Nuevo coche</Text>
        {this.state.isErrorVisible ? (
          <ErrorText>La matricula introducida ya existe</ErrorText>
        ) : (
          undefined
        )}
        <CarCreationForm handlePress={this.createNewCar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
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
});
