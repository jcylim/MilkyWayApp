import React, { Component } from 'react';
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
    this.signOut = this.signOut.bind(this);
    this.profileScreen = this.profileScreen.bind(this);
    this.activityScreen = this.activityScreen.bind(this);
    this.subscriptionsScreen = this.subscriptionsScreen.bind(this);
    this.settingScreen = this.settingScreen.bind(this);
  }

  signOut = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Login',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  profileScreen = () => {
    const navAction = NavigationActions.navigate({
      type: 'Navigate/NAVIGATE',
      routeName: 'Profile',
      // navigate can have a nested navigate action that will be run inside the child router
      /*action: {
        //NavigationActions.navigate({ routeName: 'Explore'})
        type: 'Navigate/NAVIGATE',
        routeName: 'Profile'
      }*/
    })
    this.props.navigation.dispatch(navAction);
  };

  activityScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Activity',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  subscriptionsScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Subscriptions'
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  settingScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Setting',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

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
		            	onPress={this.profileScreen}>
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
		              onPress={this.pointsScreen}>
		              	<View style={{flexDirection: 'row'}}>
		                	<Icon  
		                  		name='loyalty'
		                  		size={30}
		                	/>
		            		<Text style={{color: '#800080', fontSize: 20}}>  Subscriptions</Text>
		          	  	</View>
		        	</TouchableOpacity>
		     	</View>
			    <View style={styles.navTabContainer}>
		            <TouchableOpacity 
		              style={{width: 250, height: 30, paddingHorizontal: 10}}
		              onPress={this.activityScreen}>
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
		              onPress={this.settingScreen}>
		              	<View style={{flexDirection: 'row'}}>
		                	<Icon  
		                  		name='settings'
		                  		size={30}
		                	/>
		            		<Text style={{color: '#800080', fontSize: 20}}>  Points</Text>
		          	  	</View>
		        	</TouchableOpacity>
		     	</View>
			</View>
			<View style={styles.logoutContainer}>
		        <TouchableOpacity 
		            style={styles.logout}
		            onPress={this.signOut}>
		        	<Text style={styles.logoutButton}>Sign Out</Text>
		      	</TouchableOpacity>
		    </View>
	    </View>
	);
  }
}

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