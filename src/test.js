import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')

const screenHeight = height
const screenWidth = width
const aspectRatio = width/height
const latDelta = 0.0922
const longDelta = latDelta*aspectRatio

export default class MapTest extends React.Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }, 
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta
      }
      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    }, 
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion}) 
    }) 
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  searchPressed = () => {
    ToastAndroid.show('pressed', ToastAndroid.LONG)
  };

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={ this.state.initialPosition }
        >
          <MapView.Marker
            coordinate={ this.state.markerPosition }
          />
        </MapView>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPressed={this.searchPressed}
          >
            <Icon
              name='search'
              size={50}
              color='#800080'
            />
          </TouchableOpacity>
        </View>
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
  searchContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 20,
    right: 20,
  }
});
