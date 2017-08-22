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
	ListView } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Card, Button } from 'react-native-material-design';

let listener = null
const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

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
		this.openDrawer = this.openDrawer.bind(this);
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
		  routeName: 'Profile',
		  // navigate can have a nested navigate action that will be run inside the child router
		  //action: NavigationActions.navigate({ routeName: 'Explore'})
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

	pointsScreen = () => {
		const navAction = NavigationActions.navigate({
		  routeName: 'Points'
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

  	navigationView() {
	    return(
	      <View style={{flex: 2, backgroundColor: 'transparent'}}>
	      	<View style={styles.profileContainer}>
	      		<Image
	      			style={styles.profilePic}
	      			source={require('../images/avatar-512.png')}
	      		/>
	      		<Text style={styles.profileName}>Jonathan Lim</Text>
	      	</View>
	      	<View style={styles.navSection}>
	      		<View style={styles.navTabContainer}>
		      		<TouchableOpacity 
		      			style={{width: 250, height: 30, paddingHorizontal: 10}}
		      			onPress={this.profileScreen}
		      			>
			      		<View>
		      				{/*<Image 
			      				style={{width: 30, height: 30}}
			      				source={require('../icons/account.png')}
		      				/>*/}
							<Text style={{color: '#800080', fontSize: 20}}>Profile</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.navTabContainer}>
		      		<TouchableOpacity 
		      			style={{width: 250, height: 30, paddingHorizontal: 10}}
		      			onPress={this.activityScreen}
		      			>
			      		<View>
		      				{/*<Image 
			      				style={{width: 30, height: 30}}
			      				source={require('../icons/account.png')}
		      				/>*/}
							<Text style={{color: '#800080', fontSize: 20}}>Activity</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.navTabContainer}>
		      		<TouchableOpacity 
		      			style={{width: 250, height: 30, paddingHorizontal: 10}}
		      			onPress={this.pointsScreen}
		      			>
			      		<View>
		      				{/*<Image 
			      				style={{width: 30, height: 30}}
			      				source={require('../icons/account.png')}
		      				/>*/}
							<Text style={{color: '#800080', fontSize: 20}}>Points</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.navTabContainer}>
		      		<TouchableOpacity 
		      			style={{width: 250, height: 30, paddingHorizontal: 10}}
		      			onPress={this.settingScreen}
		      			>
						<Text style={{color: '#800080', fontSize: 20}}>Setting</Text>
					</TouchableOpacity>
				</View>
	      	</View>
	      	<View style={styles.logoutContainer}>
	      		<TouchableOpacity 
	      			style={styles.logout}
	      			onPress={this.signOut}
	      			>
					<Text style={styles.logoutButton}>Sign Out</Text>
				</TouchableOpacity>
	      	</View>
	      </View>
    	)
  	}

  	openDrawer() {
  		this.drawer.openDrawer();
  	}

	render() {
		return (
	    	<DrawerLayoutAndroid
			    drawerWidth={250}
			    ref={(_drawer) => this.drawer = _drawer}
			    drawerPosition={DrawerLayoutAndroid.positions.Left}
			    renderNavigationView={() => this.navigationView()}>
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
							<TouchableOpacity >
								<Image
									style={styles.button}
		        					source={require('../icons/subs.png')}
	      						/>
					  		</TouchableOpacity>
						</View>
				  	</View>
				  	<View style={styles.contentContainer}>
				  		<ListView
				  			//data
				  			renderRow={() => {
				  				return 
				  					<Card>
					                    <Card.Media
					                        image={<Image source={require('../images/business_image_3.png')} />}
					                        overlay
					                    />
					                    <Card.Body>
					                        <Text>Some text to go in the body.</Text>
					                    </Card.Body>
                					</Card>
				  			}}
				  		/>
				  	</View>
		    	</View>
	        </DrawerLayoutAndroid>
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
        marginBottom: 10,
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