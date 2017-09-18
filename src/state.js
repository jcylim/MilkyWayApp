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
      text: 'yuuhhhs'
    };
  }

  test = () => {
    this.setState(() => {return {text: 'changed'}});
    ToastAndroid.show(this.state.text, ToastAndroid.LONG);
  };

  renderView(text) {
    return(
      <View>
        <TouchableOpacity onPress={this.test}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        { this.renderView('works') }
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