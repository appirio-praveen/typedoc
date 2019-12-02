import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '../components/Screens/Login';
import {HomeScreen} from '../components/Screens/Home';

// The app root stack, all navigation start from here
const RootStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
