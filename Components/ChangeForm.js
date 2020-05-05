import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default class ChangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: '',
    };
  }

  render() {
    return (
      <>
        <TextInput label="Actual" value={this.props.value} disabled={true} />
        <TextInput label="Nuevo" />
        <View style={styles.buttonContainer}>
          <Button color="#15abe7" mode="contained" dark={true}>
            Enviar
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
