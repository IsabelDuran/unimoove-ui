import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import {getUser} from '../client/UsersApi';
import LoadingIndicator from '../components/LoadingIndicator';
import {ScrollView} from 'react-native-gesture-handler';
var SecurityUtils = require('../utils/SecurityUtils');

export default class MyTripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: true,
    };
  }

  handleGetUserResponse(response) {
    response.json().then(data => this.setState({user: data, loading: false}));
  }

  fetchUserData() {
    this.setState({loading: true});
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
});
