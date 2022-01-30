import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Product from "../screens/Product"
import ProductList from "../screens/ProductList"







export const AppStackNavigator = createStackNavigator({
  Product : {
    screen : Product,
    navigationOptions:{
      headerShown : false
    }
  },
  
 ProfileScreen : {
    screen : ProductList,
    navigationOptions:{
      headerShown : false
    }
  },
 

},
  {
    initialRouteName: 'Product'
  }
);