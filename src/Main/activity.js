import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ToastAndroid, 
  DrawerLayoutAndroid, 
  TouchableOpacity, 
  BackHandler, 
  Platform, 
  StatusBar, 
  Image } from 'react-native';

export default class Activity extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.pointsText}>Points Activity</Text>
          <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pointsText: {
    textAlign: 'center', 
    marginTop: 10, 
    fontSize: 20,
    color: '#800080'
  },
})