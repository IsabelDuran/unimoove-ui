import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChangeForm from '../components/ChangeForm';
import {modifyUserLastname} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class LastnameChangeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeUserLastname = this.changeUserLastname.bind(this);
  }

  handleChangelastnameResponse(response) {
    console.log('Apellidos modificados');
    console.log(JSON.stringify(response));
    this.props.navigation.goBack();
  }

  changeUserLastname(userLastnameChangeRequest) {
    let body = {
      newLastname: userLastnameChangeRequest.newValue,
    };
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([body, info.sub], modifyUserLastname).then(
        this.handleChangelastnameResponse.bind(this),
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ChangeForm
          value={this.props.route.params.lastname}
          handlePress={this.changeUserLastname}
        />
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
