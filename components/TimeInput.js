import React from 'react';
import {View, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
var LocalTimeUtils = require('../utils/LocalTimeUtils');

export default class TimeInput extends React.Component {
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
    if (newDate !== undefined) {
      this.setState({
        show: false,
        date: newDate,
        textDate: LocalTimeUtils.convertUTCToLocaleTimezone(newDate)
          .toISOString()
          .substring(11, 16),
      });
      this.props.onChange(newDate.toISOString().substring(10, newDate.length));
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
            mode="time"
            testID="dateTimePicker"
            value={this.state.date}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}
