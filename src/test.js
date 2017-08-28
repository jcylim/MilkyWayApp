import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class MapTest extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <View style={{alignItems: 'flex-end'}}>
            <Icon 
              name='search'
              size={25}
              color='#800080'
            />
          </View>
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
});
