import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

var SecurityUtils = {
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem('ApiKeyAuth');
      return token;
    } catch (error) {
      console.error(error);
    }
  },

  tokenInfo: () => {
    return this.getToken().then(token => jwt_decode(token));
  }
}

module.exports = SecurityUtils;
