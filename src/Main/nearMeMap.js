import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { samples } from '../components/businessInfo'
import { MapCallout } from '../components/locationCallout'

const { width, height } = Dimensions.get('window')

const screenHeight = height
const screenWidth = width
const aspectRatio = width/height
const latDelta = 0.000922 //0.0922
const longDelta =  0.000922 //latDelta*aspectRatio
const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT + 50;

//const { coordinate } = this.props.navigation.state.params;

export default class NearMeMap extends Component {
  constructor(props) {
    super(props)
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

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  /*componentDidMount() {
    this.map.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta,
      },
      350
    );
  }*/

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
      {enableHighAccuracy: true, timeout: 20000, maxiumAge: 10000})

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

    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= Object.keys(samples).length) {
        index = Object.keys(samples).length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      
      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = samples[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: latDelta,
              longitudeDelta: longDelta,
            },
            350
          );
        }
      }, 10);
    }); 
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const interpolations = samples.map((marker, index) => {
      const inputRange = [
        (index - 2) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style ={styles.container}>
        <MapView
          ref={map => this.map = map}
          style={styles.mapContainer}
          region={ this.state.initialPosition }
          showsMyLocationButton>
          {samples.map((location, i) => {
            return (
              <MapView.Marker
                key={i}
                pinColor={"rgba(130,4,150, 0.9)"}
                coordinate={ location.coordinate }/>
            );
          })}
          <MapView.Marker
            coordinate={ this.state.markerPosition }
          />
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          alwaysBounceHorizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          snapToAlignment={'end'}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}>
            {samples.map((marker, index) => (
              <View style={styles.card} key={index}>
                <Image
                  source={{uri: marker.image}}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>Business Name</Text>
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    Business Address
                  </Text>
                </View>
              </View>
            ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5
    /*position: 'absolute',
    top: 74,
    left: 0,
    right: 0,
    bottom: 50,*/
  },
  mapContainer: {
    flex: 1
  },
  searchContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 20,
    right: 20,
  },
  calloutContainer: {
    height: 50,
    width: 140,
    backgroundColor: '#800080'
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - (CARD_WIDTH + 60),
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
    color: '#800080'
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
   /* width: 8,
    height: 8,
    borderRadius: 4,*/
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
