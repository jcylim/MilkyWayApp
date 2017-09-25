import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import styleSlider, { sliderWidth, itemWidth } from '../components/testSliderStyle';
//import SliderEntry from '../components/testSlider';
import styles, { colors } from '../components/testStyle';
import { ENTRIES1, ENTRIES2 } from '../components/testData';
import { samples } from '../components/businessInfo';
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'

const SLIDER_1_FIRST_ITEM = 1;

export default class NearMeCards extends Component {

  static propTypes = {
    onNearMePressed: PropTypes.func, 
  };
  
  constructor (props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null
    };
    this._renderItemWithParallax = this._renderItemWithParallax.bind(this);
  }

  /*get image() {
    //const { data: { illustration }, parallax, parallaxProps, even } = this.props;
    return true ? (
        <ParallaxImage
          source={{ uri: illustration }}
          containerStyle={[styleSlider.imageContainer, (index + 1) % 2 === 0 ? styleSlider.imageContainerEven : {}]}
          style={[styleSlider.image, { position: 'relative' }]}
          parallaxFactor={0.35}
          showSpinner={true}
          spinnerColor={((index + 1) % 2 === 0) ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        />
    ) : (
        <Image
          source={{ uri: item }}
          style={styleSlider.image}
        />
    );
  }*/

  _renderItemWithParallax({item, index}, parallaxProps) {

    //const link = item.illustration;
    const even = (index + 1) % 2 === 0;
    const cardsTitle = (
      <Text
        style={styleSlider.title}
        numberOfLines={2}>
          Business Name
      </Text>
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styleSlider.slideInnerContainer}
        onPress={this.props.onNearMePressed}>
          <View style={styleSlider.imageContainer}>
            <ParallaxImage
              source={{ uri: item.image }}
              containerStyle={[styleSlider.imageContainer, even ? styleSlider.imageContainerEven : {}]}
              style={[styleSlider.image, { position: 'relative' }]}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
            <View style={styleSlider.radiusMask} />
          </View>
          <View style={styleSlider.textContainer}>
            { cardsTitle }
            <Text
              style={styleSlider.subtitle}
              numberOfLines={2}>
                { 'Number of miles away' }
            </Text>
          </View>
      </TouchableOpacity>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
            <Text style={styles.title}>Near Me</Text>
            <Carousel
              data={samples}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={true}
              autoplay={true}
              autoplayDelay={1500}
              autoplayInterval={3000}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
            />
        </View> 
      </View>
    );
  }
}

  /*_renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
        onPress={this.onNearMePressed}
      />
    );
  }*/
    /*const uppercaseTitle = title ? (
        <Text
          style={styleSlider.title}
          numberOfLines={2}
        >
            {/*{ title.toUpperCase() }*//*}
            Business Name
        </Text>
    ) : false;*/
