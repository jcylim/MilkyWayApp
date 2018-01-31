import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ToastAndroid, 
  DrawerLayoutAndroid, 
  TouchableOpacity,
  TouchableHighlight, 
  BackHandler, 
  Platform, 
  StatusBar, 
  Image,
  ListView,
  ScrollView,
  Dimensions
   } from 'react-native';
import { Avatar } from 'react-native-elements'
import { NavigationActions, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Subscriptions from '../Main/subscriptions';
import Points from '../Main/points';
import Activity from '../Main/activity';
import Profile from '../Main/profile';
import Setting from '../Main/setting';

export default class ControlPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      	<View style={{flex: 1, backgroundColor: 'white'}}>
	        <View style={styles.profileContainer}>
	          	<Avatar
			        large
			        rounded
			        icon={{name: 'person', color: '#800080'}}
			        //source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
			    />
		      	<Text style={styles.profileName}>Jonathan Lim</Text>
		    </View>
	        <View style={styles.navSection}>
	          	<View style={styles.navTabContainer}>
	            	<TouchableOpacity 
	              		style={{width: 250, height: 30, paddingHorizontal: 10}}
		            	onPress={this.props.onProfilePressed}>
		            	<View style={{flexDirection: 'row'}}>
		              		<Icon  
		                  		name='account-box'
		                  		size={30}
		                	/>
			            	<Text style={{color: '#800080', fontSize: 20}}>  Profile</Text>
			        	</View>
		        	</TouchableOpacity>
			  	</View>
		      	<View style={styles.navTabContainer}>
		            <TouchableOpacity 
		              style={{width: 250, height: 30, paddingHorizontal: 10}}
		              onPress={this.props.onSubscriptionsPressed}>
		              	<View style={{flexDirection: 'row'}}>
		                	<Icon  
		                  		name='loyalty'
		                  		size={30}
		                	/>
		            		<Text style={{color: '#800080', fontSize: 20}}>  Memberships</Text>
		          	  	</View>
		        	</TouchableOpacity>
		     	</View>
			    <View style={styles.navTabContainer}>
		            <TouchableOpacity 
		              style={{width: 250, height: 30, paddingHorizontal: 10}}
		              onPress={this.props.onActivityPressed}>
		              	<View style={{flexDirection: 'row'}}>
		                	<Icon  
		                  		name='assessment'
		                  		size={30}
		                	/>
		            		<Text style={{color: '#800080', fontSize: 20}}>  Activity</Text>
		          	  	</View>
		        	</TouchableOpacity>
		     	</View>
			    <View style={styles.navTabContainer}>
		            <TouchableOpacity 
		              style={{width: 250, height: 30, paddingHorizontal: 10}}
		              onPress={this.props.onSettingPressed}>
		              	<View style={{flexDirection: 'row'}}>
		                	<Icon  
		                  		name='settings'
		                  		size={30}
		                	/>
		            		<Text style={{color: '#800080', fontSize: 20}}>  Setting</Text>
		          	  	</View>
		        	</TouchableOpacity>
		     	</View>
			</View>
			<View style={styles.logoutContainer}>
		        <TouchableOpacity 
		            style={styles.logout}
		            onPress={this.props.onSignOutPressed}>
		        	<Text style={styles.logoutButton}>Sign Out</Text>
		      	</TouchableOpacity>
		    </View>
	    </View>
	);
  }
}

ControlPanel.propTypes = {
	onProfilePressed: PropTypes.func,
	onSubscriptionsPressed: PropTypes.func,
	onActivityPressed: PropTypes.func,
	onSettingPressed: PropTypes.func,
	onSignOutPressed: PropTypes.func,
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  profileName: {
    fontSize: 18,
    color: '#800080'
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logout: {
    width: 200,
    height: 30,
    backgroundColor: '#800080',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  logoutButton: {
    fontSize: 15, 
    color: 'white', 
  },
  navSection: {
    flex: 2, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
  },
  navTabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
})

//export default ControlPanelStack;