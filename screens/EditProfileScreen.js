import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import MyHeader from '../components/MyHeader'

export default class EditProfileScreen extends React.Component{
  
  render(){
    
  return (
    
    <View style={styles.container}>
     <MyHeader title="Cart Items" navigation={this.props.navigation}/>
     <Text style={{fontSize:20,textAlign:"center",fontWeight:200,color:"Blue"}}> Please Click On Check Out Button for the payment method</Text>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
