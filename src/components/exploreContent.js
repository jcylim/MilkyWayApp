import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './testSliderStyle';
import styles, { colors } from './testStyle';
import { samples } from './businessInfo';
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'

export default class ExploreContent extends Component {

  static propTypes = {
    onBusinessPressed: PropTypes.func, 
  };

  constructor (props) {
    super(props);
    /*this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        slider1Ref: null
    };*/
  }
  
  render () {
    return (
      <View style={styles.container}>
        {/*<StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
        />*/}
        <View style={{marginBottom: 10}}>
		  		<Text style={styles.title}>Explore</Text>
		  	</View>
        <View style={styles.cardsContainer}>
          {samples.map((sample, i) => (
            <Tile
              key={i}
              imageSrc={{uri: sample.image}}
              title='Business Name'
              titleStyle={{fontSize: 15, color: '#800080'}}
              //featured
              //height={180}
              contentContainerStyle={{height: 70}}
              onPress={this.props.onBusinessPressed}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12}}>Business Address</Text>
                <View style={{flexDirection: 'row'}}>
                	<Text style={{fontSize: 12}}>Number of Miles Away   </Text>
                </View>
              </View>
            </Tile>
          ))}
        </View>
      </View>
    );
  }
}

