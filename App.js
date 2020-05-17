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
import UsernameChangeScreen from './screens/UsernameChangeScreen';
import NameChangeScreen from './screens/NameChangeScreen';
import LastnameChangeScreen from './screens/LastnameChangeScreen';
import EmailChangeScreen from './screens/EmailChangeScreen';
import PasswordChangeScreen from './screens/PasswordChangeScreen';
import CreateCarScreen from './screens/CreateCarScreen.js';
import EditCarScreen from './screens/EditCarScreen.js';
import BrandChangeScreen from './screens/BrandChangeScreen.js';
import ModelChangeScreen from './screens/ModelChangeScreen.js';
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
  /*SecurityUtils.clearAll().then(
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
                <>
                  <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="UsernameChangeScreen"
                    component={UsernameChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Cambiar nombre de usuario',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="NameChangeScreen"
                    component={NameChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Cambiar nombre',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="LastnameChangeScreen"
                    component={LastnameChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Cambiar apellidos',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="EmailChangeScreen"
                    component={EmailChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Cambiar email',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="PasswordChangeScreen"
                    component={PasswordChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Cambiar contraseña',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="CreateCarScreen"
                    component={CreateCarScreen}
                    options={{
                      headerShown: true,
                      title: 'Añadir un coche',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="EditCarScreen"
                    component={EditCarScreen}
                    options={{
                      headerShown: true,
                      title: 'Editar coche',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="BrandChangeScreen"
                    component={BrandChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Editar marca',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                  <Stack.Screen
                    name="ModelChangeScreen"
                    component={ModelChangeScreen}
                    options={{
                      headerShown: true,
                      title: 'Editar modelo',
                      headerStyle: {backgroundColor: '#12ABE7'},
                      headerTintColor: '#fff',
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      );
    }
  }
}
