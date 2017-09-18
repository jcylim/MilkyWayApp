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
import { NavigationActions } from 'react-navigation'
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'
import Drawer from 'react-native-drawer'

import stylez, { colors } from '../components/testStyle';
import { samples } from '../components/businessInfo';
import ExploreContent from '../components/exploreContent'
import Search from '../components/searchButton'
import QRScanner from './qrScanner'
import ControlPanel from '../components/controlPanel'
import NearMeCards from '../components/nearMeCards'

let listener = null

export default class Explore extends Component {

	componentDidMount() {
	    if (Platform.OS == "android" && listener == null) {
	      listener = BackHandler.addEventListener("hardwareBackPress", () => {
	        BackHandler.exitApp();
	      })
	    }
  	}

	constructor() {
		super();
		this.businessPressed = this.businessPressed.bind(this);
		this.searchPressed = this.searchPressed.bind(this);
		this.nearMePressed = this.nearMePressed.bind(this);
		this.signOut = this.signOut.bind(this);
		this.profileScreen = this.profileScreen.bind(this);
		this.subscriptionsScreen = this.subscriptionsScreen.bind(this);
		this.activityScreen = this.activityScreen.bind(this);
		this.settingScreen = this.settingScreen.bind(this);
	}

	openDrawer = () => {
    	this._drawer.open()
  	};

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

	nearMePressed = () => {
	    const navAction = NavigationActions.navigate({
	      routeName: 'NearMeMap',
	      // navigate can have a nested navigate action that will be run inside the child router
	      //action: NavigationActions.navigate({ routeName: 'Explore'})
	    })
	    this.props.navigation.dispatch(navAction);
	};

	businessPressed = () => {
	    const navAction = NavigationActions.navigate({
	      routeName: 'BusinessInfo',
	      // navigate can have a nested navigate action that will be run inside the child router
	      //action: NavigationActions.navigate({ routeName: 'Explore'})
	    })
	    this.props.navigation.dispatch(navAction);
	};

  	searchPressed = () => {
      	const navAction = NavigationActions.navigate({
	      routeName: 'SearchMap',
	      // navigate can have a nested navigate action that will be run inside the child router
	      //action: NavigationActions.navigate({ routeName: 'Explore'})
	    })
	    this.props.navigation.dispatch(navAction);
    };

    nearMePressed = () => {
        const navAction = NavigationActions.navigate({
          routeName: 'NearMeMap',
          // navigate can have a nested navigate action that will be run inside the child router
          //action: NavigationActions.navigate({ routeName: 'Explore'})
      	})
      	this.props.navigation.dispatch(navAction);
    };

	render() {
	    return (
	      <Swiper
	        showsPagination={false}
	        loop={false}>
	        <Drawer
	          ref={(ref) => this._drawer = ref}
	          type="overlay"
	          content={<ControlPanel 
	          	onProfilePressed={this.profileScreen}
				onSubscriptionsPressed={this.subscriptionsScreen}
				onActivityPressed={this.activityScreen}
				onSettingPressed={this.settingScreen}
				onSignOutPressed={this.signOut}
	          />}
	          tapToClose={true}
	          openDrawerOffset={0.4} // 20% gap on the right side of drawer
	          panCloseMask={0.2}
	          closedDrawerOffset={-3}
	          tweenHandler={(ratio) => ({
	            main: { opacity:(2-ratio)/2 }
	          })}>
	            <View style={styles.container}>
	              	<View style={styles.navBarContainer}>
		                <View style={styles.profileButtonContainer}>
		                  <TouchableOpacity onPress={this.openDrawer}>
		                    <Image
		                      style={styles.button}
		                      source={require('../icons/profile.png')}
		                    />
		                  </TouchableOpacity>
		                </View>
		                <View style={styles.imageContainer}>  
		                  	<Image
		                    	style={styles.image}
		                    	source={require('../images/spiral_white.png')}
		                    	resizeMode='contain'
		                  	/>
		                </View>
		                <View style={styles.extraContainer}>
		                  <TouchableOpacity>
		                    <Icon  
		                      	name='payment'
		                      	size={30}
		                      	color='white' 
		                    />
		                  </TouchableOpacity>
		                </View>
	              	</View>
	              	<ScrollView
	                  style={stylez.scrollview}
	                  contentContainerStyle={stylez.scrollviewContentContainer}
	                  indicatorStyle={'white'}
	                  //scrollEventThrottle={200}
	                  directionalLockEnabled={true}>
			            <NearMeCards 
			            	onNearMePressed={this.nearMePressed}/>
	                    <ExploreContent 
			            	onBusinessPressed={this.businessPressed}/>
	                </ScrollView>
		            <Search 
		            	onPress={this.searchPressed}
		            />
	            </View>
	        </Drawer>
	        <QRScanner />
	      </Swiper>
	    );
  	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
	},
	navBarContainer: {
		backgroundColor: '#800080',
        flexDirection: 'row',
        //marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingTop: 15 
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	profileButtonContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardsContainer: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	button: {
		width: 30,
		height: 30
	},
	image: {
		width: 40,
		height: 40
	},
	extraContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	profileContainer: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	profilePic: {
		width: 80,
		height: 80,
	},
	profileName: {
		fontSize: 18,
		color: '#800080'
	},
	logoutContainer: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center'
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
	contentContainer: {
		flex: 2
	}
})