import React from 'react';
import {View, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';

export default class DateTimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      time: new Date(),
      textTime: '',
    };
    this.setTime = this.setTime.bind(this);
  }

  setTime(event, newTime) {
    if (newTime !== undefined) {
      this.setState({
        show: false,
        time: newTime.toISOString(),
        textTime: newTime.toISOString(),
      });
      this.props.onChange(this.state.textTime);
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
            timeZoneOffsetInMinutes={0}
            value={this.state.time}
            display="default"
            onChange={this.setTime}
          />
        )}
      </View>
    );
  }
}
