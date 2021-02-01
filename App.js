
import React, {Component} from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const App = createSwitchNavigator(
  {
    splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    initialRouteName: 'splash',
  },
);

export default createAppContainer(App);




