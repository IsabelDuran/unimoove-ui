import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateInput from '../components/DateInput';
import TimeInput from '../components/TimeInput';

export default class SearchTripForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container} behavior="padding">
        <Text style={styles.text}>¿De dónde quieres salir?</Text>
        <TextInput mode="outlined" />
        <Text style={styles.text}>¿A dónde quieres ir?</Text>
        <TextInput mode="outlined" />
        <Text style={styles.text}>¿Qué día quieres salir?</Text>
        <DateInput />
        <Text style={styles.text}>¿A que hora quieres salir?</Text>
        <TimeInput />
        <Button style={styles.button} mode="contained" dark={true}>
          Buscar
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#69e000',
    fontSize: 18,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});
