import React from 'react';
import {Text, View, Button} from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
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
            title="Registrarse"
            color="#15abe7"
            onPress={() => {
              this.props.navigation.navigate('RegistrationScreen');
            }}
          />

          <Button title="Iniciar Sesión" color="#69e000" />
        </View>
      </View>
    );
  }
}
