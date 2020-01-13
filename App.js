import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ConnexionScreen from './screens/ConnexionScreen';
import InscriptionScreen from './screens/InscriptionScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AboutScreen from './screens/AboutScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Inscription: InscriptionScreen,
    Connexion: ConnexionScreen,
    Welcome: WelcomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
     defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
