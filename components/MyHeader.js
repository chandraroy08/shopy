import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';



const MyHeader = props => {
  return (
    <Header
      backgroundColor="#FF6347"
      leftComponent={<Icon name='bars' type='font-awesome' color='white'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: 'pink', fontSize:20,fontWeight:"bold", }  }}
      
      rightComponent={<Icon name='shopping-cart' type='font-awesome' color='white'  onPress={() =>props.navigation.navigate('CartItems')}/>}
    />
  );
};

export default MyHeader;