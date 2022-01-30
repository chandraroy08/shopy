import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#ddddff', '#ddf0ff', '#deffde']}
      style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text
          style={{
            alignText: 'center',
            fontSize: 32,
            fontWeight: 'bold',
            color: '#000',
            height: 80,
            textAlign: 'center',
            marginTop: 80,
          }}>
          Your Speaker
        </Text>

        <View style={{flexDirection:'row'}}>
        <Animatable.Image
          source={require('../assets/Headphone-removebg-preview.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        
      </View>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: 'black',
            },
          ]}>
          Music On
        </Text>
        <Text
          style={[
            styles.text2,
            {
              color: 'black',
            },
          ]}>
          Let's get started
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.button}>
          <View style={styles.signIn}>
            <Text style={styles.textSign}>Click Here</Text>
            <Image
              style={{ height: 30, width: 50 }}
              source={require('../assets/R-removebg-preview.png')}
            />
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
};

export default SplashScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ddddff',
  },
  footer: {
    flex: 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: 'grey',
    fontSize: 18,
  },
  button: {
    marginTop: 80,
    width: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  logo: {
    width: 250,
    height: 350,
    marginLeft:10
  },
  logo2: {
    width: 200,
    height: 300,
    marginLeft:-50,
    marginTop:80
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
