import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {searchTripReservations} from '../client/TripsApi';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');
var LocalTimeUtils = require('../utils/LocalTimeUtils');

export default class ReservationDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      reservation: this.props.route.params.reservation,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/fullcar.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Datos de mi reserva</Text>
        </View>
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
