import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';

import EditProfileScreen from '../screens/EditProfileScreen'

import AboutTheDevelopers from '../screens/AboutTheDevelopers'

import Splashscreen from "../screens/Splashscreen"


import CardDetails from "../screens/CardDetails"
export const AppDrawerNavigator = createDrawerNavigator({
  Product : {
    screen : AppTabNavigator
    },
  CartItems: {
    screen : EditProfileScreen
  },
  Payment:{
    screen: CardDetails
  },
  
  AboutTheDevelopers: {
    screen : AboutTheDevelopers 
  },

  Splashscreen:{
    screen:Splashscreen
  }
 
  

},

  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Product'
  })