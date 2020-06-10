import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SearchTripForm from '../components/SearchTripForm';
import {getUser} from '../client/UsersApi';
import {searchTrip} from '../client/TripsApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class SearchTripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.fetchUserData = this.fetchUserData.bind(this);
    this.searchTrips = this.searchTrips.bind(this);
  }

  handleSearchTripResponse(response) {
    if (response.ok) {
      response.json().then(data => {
        this.props.navigation.navigate('SearchedTripsScreen', {
          trips: data.pages,
          paginationInfo: data.paginationInfo,
        });
      });
    } else {
      console.log(JSON.stringify(response));
    }
  }

  searchTrips(searchParameters) {
    let dateTime =
      searchParameters.departureDate + searchParameters.departureTime;
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi(
        [
          searchParameters.arrivalPlace,
          dateTime,
          searchParameters.departurePlace,
          0,
          5,
        ],
        searchTrip,
      ).then(this.handleSearchTripResponse.bind(this));
    });
  }

  handleGetUserResponse(response) {
    response.json().then(data => {
      this.setState({user: data});
    });
  }

  fetchUserData() {
    this.setState({loading: true});
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([info.sub], getUser).then(
        this.handleGetUserResponse.bind(this),
      );
    });
  }

  render() {
    return (
      <View style={styles.container} behavior="padding">
        <Image
          source={require('../assets/img/reservation.png')}
          style={styles.image}
        />
        <SearchTripForm handlePress={this.searchTrips} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 430,
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
