import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import RegistrationScreen from './screens/RegistrationScreen.js';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MainScreen from './screens/MainScreen.js';
import SplashScreen from './screens/SplashScreen';
var SecurityUtils = require('./utils/SecurityUtils');

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12ABE7',
    accent: '#69e000',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserSignedIn: null,
      isLoading: true,
    };
  }

  async findExistingToken() {
   /* SecurityUtils.clearAll().then(
      SecurityUtils.getToken().then(this.handleRecieveToken.bind(this)),
    );*/
     SecurityUtils.getToken().then(token =>
      this.setState({isUserSignedIn: token, isLoading: false}),
    );
  }

  render() {
    this.findExistingToken();
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else {
      return (
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              {this.state.isUserSignedIn == null ? (
                <>
                  <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="RegistrationScreen"
                    component={RegistrationScreen}
                    options={{headerShown: false}}
                  />
                </>
              ) : (
                <Stack.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{headerShown: false}}
                />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      );
    }
  }
}
