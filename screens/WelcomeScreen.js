import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', alignSelf:'stretch'}}>
        <View style={{justifyContent: 'center', marginTop: 200}}>
          <Text
            style={{
              fontFamily: 'Pacifico-Regular',
              color: '#15abe7',
              fontSize: 70,
            }}>
            Uni
            <Text
              style={{
                color: '#69e000',
              }}>
              moove
            </Text>
          </Text>
          <Button
            color="#15abe7"
            mode="contained"
            dark={true}
            onPress={() => {
              this.props.navigation.navigate('RegistrationScreen');
            }}>
            Registrarse
          </Button>
          <Button mode="contained" dark={true} color="#69e000">
            Iniciar Sesión
          </Button>
        </View>
      </View>
    );
  }
}
