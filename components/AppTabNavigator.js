import React from 'react';
import { Image ,View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Product from "../screens/Product"
import ProductList from "../screens/ProductList"
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CardDetails from "../screens/CardDetails"




export const AppTabNavigator = createBottomTabNavigator({
 
    Product: {
      screen: Product,
      navigationOptions: {
        tabBarLabel: 'Product',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-list'} />
          </View>
        ),
        activeColor: '#FF6347',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#FF6347' },
      },
    },
    ProductList: {
      screen: ProductList,
      navigationOptions: {
        tabBarLabel: 'ProductList',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-cart'}
            />
          </View>
        ),
        activeColor: '#FF6347',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      },
    },

  },
  
);
