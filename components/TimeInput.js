import React from 'react';
import {View, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';

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

  convertUTCToLocaleTimezone(date) {
    let offset = new Date().getTimezoneOffset() * 60000;
    return new Date(date - offset);
  }

  setDate(event, newDate) {
    /* This is to convert the date to the current timezone */
    newDate = this.convertUTCToLocaleTimezone(newDate);
    if (newDate !== undefined) {
      this.setState({
        show: false,
        date: newDate,
        textDate: newDate.toISOString().substring(11, 16),
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
