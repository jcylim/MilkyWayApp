import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput, 
	ToastAndroid, 
	DrawerLayoutAndroid, 
	TouchableOpacity, 
	BackHandler, 
	Platform, 
	StatusBar, 
	Image } from 'react-native';
	
let listener = null

export default class Explore extends Component {

	componentDidMount() {
	    if (Platform.OS == "android" && listener == null) {
	      listener = BackHandler.addEventListener("hardwareBackPress", () => {
	        return false
	      })
	    }
  	}

	constructor() {
		super();
		this.openDrawer = this.openDrawer.bind(this);
	}

  	navigationView(){
	    return(
	      <View style={{flex: 1, backgroundColor: 'transparent'}}>
	      	<Text style={{margin: 10, fontSize: 15, textAlign: 'left', color: '#800080'}}>I'm in the Drawer!</Text> 
	      </View>
    	)
  	}

  	openDrawer() {
  		this.drawer.openDrawer();
  	}

	render() {
		return (
	    	<DrawerLayoutAndroid
			    drawerWidth={200}
			    ref={(_drawer) => this.drawer = _drawer}
			    drawerPosition={DrawerLayoutAndroid.positions.Left}
			    renderNavigationView={() => this.navigationView()}>
			    <View style={styles.container}>
			    	<View style={styles.navBarContainer}>
			    		<View style={styles.profileButtonContainer}>
				    		<TouchableOpacity onPress={this.openDrawer}>
								<Image
									style={styles.profileButton}
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
						<View style={styles.extraContainer}/>
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
	profileButton: {
		width: 30,
		height: 30
	},
	image: {
		width: 40,
		height: 40
	},
	extraContainer: {
		flex: 1
	}
})