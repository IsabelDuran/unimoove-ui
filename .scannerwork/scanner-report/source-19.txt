import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChangeForm from '../components/ChangeForm';
import ErrorText from '../components/ErrorText';
import {modifyUserUsername} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class UsernameChangeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorVisible: false,
    };
    this.changeUserUsername = this.changeUserUsername.bind(this);
  }

  handleChangeUsernameResponse(response) {
    if (response.ok) {
      console.log('Nombre de usuario modificado');
      console.log(JSON.stringify(response));
      this.props.navigation.goBack();
    } else {
      this.setState({isErrorVisible: true});
    }
  }

  changeUserUsername(userUsernameChangeRequest) {
    let body = {
      newUsername: userUsernameChangeRequest.newValue,
    };
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi([body, info.sub], modifyUserUsername).then(
        this.handleChangeUsernameResponse.bind(this),
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isErrorVisible ? (
          <ErrorText style={styles.errorTextStyle}>
            El nombre de usuario introducido ya existe
          </ErrorText>
        ) : (
          undefined
        )}

        <ChangeForm
          value={this.props.route.params.username}
          handlePress={this.changeUserUsername}
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
