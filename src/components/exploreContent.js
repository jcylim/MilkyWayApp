import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './testSliderStyle';
import SliderEntry from './testSlider';
import styles, { colors } from './testStyle';
import { ENTRIES1, ENTRIES2 } from './testData';
import { samples } from './businessInfo';
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'

const SLIDER_1_FIRST_ITEM = 1;

export default class ExploreContent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
        this.nearMePressed = this.nearMePressed.bind(this);
    }

 /*   _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }*/

    nearMePressed = () => {
        const navAction = NavigationActions.navigate({
        routeName: 'NearMeMap',
        // navigate can have a nested navigate action that will be run inside the child router
        //action: NavigationActions.navigate({ routeName: 'Explore'})
      })
      this.props.navigation.dispatch(navAction);
    };

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
              onPress={this.nearMePressed}
            />
        );
    }
    
    get example () {
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>Near Me</Text>
                <Carousel
               	  data={ENTRIES2}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.6}
                  enableMomentum={true}
                  autoplay={true}
                  autoplayDelay={1500}
                  autoplayInterval={1500}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                />
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                {/*<StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                />*/}
                <ScrollView
                  style={styles.scrollview}
                  contentContainerStyle={styles.scrollviewContentContainer}
                  indicatorStyle={'white'}
                  //scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                    { this.example }
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
                          onPress={this.props.onBusinessPressed}
      			            >
      			              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      			                <Text style={{fontSize: 12}}>Business Address</Text>
      			                <View style={{flexDirection: 'row'}}>
      			                	<Text style={{fontSize: 12}}>Number of Miles Away   </Text>
      			                </View>
      			              </View>
      			            </Tile>
      			          ))}
      			        </View>
                </ScrollView>
            </View>
        );
    }
}

ExploreContent.propTypes = {
  onBusinessPressed: PropTypes.func 
}
