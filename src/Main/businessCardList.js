import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

//import Cards from '../components/card'

//import Button from 'react-native-button';

export default class BusinessCardList extends Component {
	
	constructor() {
	    super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
	    };
	}

  	render() {
	    return (
	    	<ScrollView>
		      	<ListView
			       	dataSource={this.state.dataSource}
			        renderRow={(rowData) => <Text>{rowData}</Text>}
			    />
		    </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});