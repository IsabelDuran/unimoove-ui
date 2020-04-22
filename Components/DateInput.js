import React, {useState} from 'react';
import {View, Button, Platform, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      date: new Date(),
      textDate: '',
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(event, newDate) {
    if (newDate != undefined) {
      this.setState({
        show: false,
        date: newDate,
        textDate: newDate.toISOString().substring(0, '####-##-##'.length),
      });
      this.props.onChange(this.state.textDate);
    } else this.setState({show: false});

  }

  render() {
    return (
      <View>
        <TextInput
          caretHidden={true}
          onFocus={() => {
            this.setState({show: true});
            Keyboard.dismiss();
          }}
          label={this.props.label}
          mode="outlined"
          value={this.state.textDate}
        />
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={this.state.date}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}
