import React from 'react';
import {Text} from 'react-native';
var SecurityUtils = require('../utils/SecurityUtils');


function handleGetUserResponse(response) {
  console.log(JSON.stringify(response));
}
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
   /* console.log(JSON.stringify(SecurityUtils));
    SecurityUtils.getToken().then(token => {
      var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
      ApiKeyAuth.apiKey = token;

      SecurityUtils.tokenInfo().then(info => {
        let apiInstance = new CustomUsersApi();
        apiInstance.getUser(info.sub, handleGetUserResponse);
      });
    });*/
  }
  render() {
    return <Text>Estas en la main screen</Text>;
  }
}
