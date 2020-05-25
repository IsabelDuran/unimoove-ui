import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChangeForm from '../components/ChangeForm';
import {modifyUserName} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class NameChangeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeUserName = this.changeUserName.bind(this);
  }

  handleChangeNameResponse(response) {
    console.log('Nombre modificado');
    console.log(JSON.stringify(response));
    this.props.navigation.goBack();
  }

  changeUserName(userUsernameChangeRequest) {
    let body = {
      newName: userUsernameChangeRequest.newValue,
    };
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([body, info.sub], modifyUserName).then(
        this.handleChangeNameResponse.bind(this),
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ChangeForm
          value={this.props.route.params.name}
          handlePress={this.changeUserName}
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
