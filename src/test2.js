import React, { Component, PropTypes } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ListView,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native'
import { SearchBar } from 'react-native-elements'

import { samples } from './components/businessInfo'

const {width, height} = Dimensions.get('window')
const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2}); 
var textInputted = false;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(samples),
      isLoaded: false,
      isOpenMenu: false,
      rotateY: new Animated.Value(0),
      translateX: new Animated.Value(width),
      menuAnimation: new Animated.Value(0),
      text: ''
    };
  }

  componentDidMount() {
    this.search.focus();
  }

  test = () => {
    ToastAndroid.show('business selected', ToastAndroid.LONG);
  };

  someMethod = () => {
    textInputted = true;
    ToastAndroid.show(String(textInputted), ToastAndroid.LONG)
  };

  _renderRow(rowData) {
    //ToastAndroid.show('in renderrow:' + String(textInputted), ToastAndroid.LONG)
    return(
      <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity 
          style={{paddingVertical: 10}}  
          onPress={this.test}>
            <Text style={{fontSize: 18}}>{rowData.image}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  filterSearch(text) {
    const newData = samples.filter(function(business){
        const businessData = business.image.toUpperCase()
        const textData = text.toUpperCase()
        return businessData.indexOf(textData) > -1
    })
    this.setState(() => { return {
        dataSource: this.state.dataSource.cloneWithRows(newData),
        text: text };
    });
    ToastAndroid.show(this.state.text, ToastAndroid.LONG)
  }

  render() {
    return (
      <View>
        <SearchBar
          ref={search => this.search = search}
          lightTheme
          round
          value={this.state.text}
          //showLoadingIcon={true}
          icon={{color: '#800080'}}
          onChangeText={(text) => this.filterSearch(text)}
          placeholderTextColor='white'
          placeholder='Look up a business here...' />
        <Animated.View
          style={[styles.content, {
              width: width,
              backgroundColor: 'gray',
              flex: 1,
              transform: [
                  {
                      perspective: 450
                  },
                  {
                      translateX: this.state.translateX.interpolate({
                          inputRange: [0, width],
                          outputRange: [width, 0]
                      })
                  },
                  {
                      rotateY: this.state.rotateY.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '-10deg']
                      })
                  }
              ]
          }]}> 
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
            />
        </Animated.View>
        
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#800080', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  content: {
    zIndex: 1
  },
});