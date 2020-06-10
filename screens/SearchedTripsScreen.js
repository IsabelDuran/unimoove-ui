import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class SearchTripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: this.props.route.params.trips,
      paginationInfo: this.props.route.params.paginationInfo,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.paginationInfo.totalElements === 0 ? (
          <>
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
          </>
        ) : (
          undefined
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
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
});
