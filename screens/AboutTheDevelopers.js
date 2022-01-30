import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyHeader
            title="About the developers"
            navigation={this.props.navigation}
          />
          
              
          <View style={{ alignSelf: 'center', marginTop:10}}>
            <View style={styles.profileImage2}>
              <Image
                source={require('../assets/ChandraProfile.png')}
                style={styles.image2}
                resizeMode="center"></Image>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: '200', fontSize: 36 }]}>
              Chandra
            </Text>
            <Text style={[styles.text, { color: '#AEB5BC', fontSize: 14 }]}>
              Kolkata, India
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>
                Photos From India
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: '#AEB5BC', fontSize: 14 },
                ]}></Text>
            </View>
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../assets/Kedarnath.jpg')}
                  style={styles.image}></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../assets/NAINITAL.jpg')}
                  style={styles.image}
                  resizeMode="cover"></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/NAINITAL.jpg")}
                  style={styles.image}
                  resizeMode="cover"></Image>
              </View>
            </ScrollView>
          </View>
          <Text style={[styles.subText, styles.recent]}>Hobbies</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[
                    styles.text,
                    { color: '#41444B', fontWeight: '300' },
                  ]}>
                  Playing Tennis and Surfing
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[
                    styles.text,
                    { color: '#41444B', fontWeight: '300' },
                  ]}>
                  Coding different apps and games
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  image2: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
 
  
  profileImage2: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
