import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './components/testSliderStyle';
import SliderEntry from './components/testSlider';
import styles, { colors } from './components/testStyle';
import { ENTRIES1, ENTRIES2 } from './components/testData';
import { samples } from './components/businessInfo';
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
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
                  autoplayInterval={2500}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                />
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                />
                <ScrollView
                  style={styles.scrollview}
                  contentContainerStyle={styles.scrollviewContentContainer}
                  indicatorStyle={'white'}
                  //scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                    { this.example }
                    <View style={styles.exampleContainer}>
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
