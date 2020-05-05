import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import ChangeForm from '../components/ChangeForm';

export default class UsernameChangeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ChangeForm value="username"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
