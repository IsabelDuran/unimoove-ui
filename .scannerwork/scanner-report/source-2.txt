import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChangeForm from '../components/ChangeForm';
import {modifyCarBrand} from '../client/UsersApi';
var SecurityUtils = require('../utils/SecurityUtils');

export default class BrandChangeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeCarBrand = this.changeCarBrand.bind(this);
  }

  handleChangeCarBrandResponse(response) {
    console.log('Marca modificada');
    console.log(JSON.stringify(response));
    this.props.navigation.goBack();
  }

  changeCarBrand(carBrandChangeRequest) {
    let body = {
      newBrand: carBrandChangeRequest.newValue,
    };
    SecurityUtils.tokenInfo().then(info => {
      SecurityUtils.authorizeApi(
        [body, this.props.route.params.plate, info.sub],
        modifyCarBrand,
      ).then(this.handleChangeCarBrandResponse.bind(this));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ChangeForm
          value={this.props.route.params.brand}
          handlePress={this.changeCarBrand}
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
