import React from 'react';
import {Text, ScrollView, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
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
        <Button
          onPress={() => {
            this.props.navigation.navigate('BrandChangeScreen', {
              brand: this.props.route.params.car.brand,
              plate: this.props.route.params.car.plate,
            });
          }}>
          Modificar Marca
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('ModelChangeScreen', {
              model: this.props.route.params.car.model,
              plate: this.props.route.params.car.plate,
            });
          }}>
          Modificar Modelo
        </Button>
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
