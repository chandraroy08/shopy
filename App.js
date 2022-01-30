import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'
import Splashscreen from './screens/Splashscreen'



export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Splashscreen:{screen:Splashscreen},

  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
