import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-paper';
export default class EditCarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Image
            source={require('../assets/img/car.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{this.props.route.params.car.plate}</Text>
        </View>
        <TextInput
          label="Marca"
          caretHidden={true}
          value={this.props.route.params.car.brand}
          onFocus={() => {
            Keyboard.dismiss();
            this.props.navigation.navigate('UsernameChangeScreen', {
              brand: this.props.route.params.car.brand,
            });
          }}
        />
        <TextInput
          label="Modelo"
          caretHidden={true}
          value={this.props.route.params.car.model}
          onFocus={() => {
            Keyboard.dismiss();
            this.props.navigation.navigate('UsernameChangeScreen', {
              model: this.props.route.params.car.model,
            });
          }}
        />
        <TextInput
          label="Numero de asientos"
          caretHidden={true}
          value={this.props.route.params.car.seats.toString()}
          onFocus={() => {
            Keyboard.dismiss();
            this.props.navigation.navigate('UsernameChangeScreen', {
              seats: this.props.route.params.car.seats,
            });
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  image: {
    width: 100,
    height: 100,
  },
});
