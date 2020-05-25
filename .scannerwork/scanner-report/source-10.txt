import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChangeForm from '../components/ChangeForm';
import {modifyCarModel} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class ModelChangeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeCarModel = this.changeCarModel.bind(this);
  }

  handleChangeCarModelResponse(response) {
    console.log('Modelo modificado');
    console.log(JSON.stringify(response));
    this.props.navigation.goBack();
  }

  changeCarModel(carModelChangeRequest) {
    let body = {
      newModel: carModelChangeRequest.newValue,
    };
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi(
        [body, this.props.route.params.plate, info.sub],
        modifyCarModel,
      ).then(this.handleChangeCarModelResponse.bind(this));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ChangeForm
          value={this.props.route.params.model}
          handlePress={this.changeCarModel}
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
