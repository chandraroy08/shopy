import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
    };
  }
  getCameraPermissions = async (domState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      hasCameraPermissions: status === 'granted',
      domState: domState,
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scannedData: data,
      domState: 'normal',
      scanned: true,
    });
  };

  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
    if (domState === 'scanner') {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }

    return (
      <View>
        <MyHeader title="Select Payment" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>
            {hasCameraPermissions ? scannedData : 'Request For the Payment'}
          </Text>
          <TouchableOpacity
            style={[styles.button, { marginTop: 25 }]}
            onPress={() => this.getCameraPermissions('scanner')}>
            <Text style={styles.buttonText}>ScanQRCode</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: "pink"
  },

  button: {
    // width: 200,
    // height: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'cyan',
    // borderRadius: 15,
  },
  buttonText: {
    // fontSize: 20,
    // color: 'black',
  },
});
