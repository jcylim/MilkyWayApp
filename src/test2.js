import React, { Component, PropTypes } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ListView,
  TouchableOpacity
} from 'react-native'
import { SearchBar } from 'react-native-elements'

import { samples } from './components/businessInfo'

const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2}); 

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(samples),
      textInputted: false
    };
  }

  componentDidMount() {
    this.search.focus();
  }

  test = () => {
    ToastAndroid.show('business selected', ToastAndroid.LONG);
  };

  someMethod = () => {
    this.setState({
        textInputted: !this.state.textInputted
    });
    ToastAndroid.show('yuhh', ToastAndroid.LONG);
  };

  _renderRow(rowData) {
    if (this.state.textInputted) {
        return (
            <View style={{paddingHorizontal: 30}}>
              <TouchableOpacity 
                style={{paddingVertical: 10}} 
                onPress={this.test}>
                  <Text style={{fontSize: 18}}>{rowData.latitude}</Text>
              </TouchableOpacity>
            </View>
        );
    } else {
        return null;
    }
  }

  render() {
    return (
      <View>
        <SearchBar
          ref={search => this.search = search}
          lightTheme
          round
          //showLoadingIcon={true}
          icon={{color: '#800080'}}
          onChangeText={this.someMethod}
          placeholderTextColor='white'
          placeholder='Look up a business here...' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#800080', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}