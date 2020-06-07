import React, {Component} from 'react';
import {Text} from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import SearchTripForm from '../components/SearchTripForm';

export default class SearchTripScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container} behavior="padding">
        <Image
          source={require('../assets/img/reservation.png')}
          style={styles.image}
        />
        <SearchTripForm />
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
  image: {
    width: 100,
    height: 100,
  },
});
