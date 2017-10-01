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
import { Avatar } from 'react-native-elements'

export default class Profile extends Component {

	render() {
		return (
			<View style={styles.container}>
		    	<View style={styles.profileContainer}>
		          	<Avatar
				        large
				        rounded
				        icon={{name: 'person', color: '#800080'}}
				        //source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
				    />
			      	<Text style={styles.profileName}>Jonathan Lim</Text>
			    </View>
			    <View style={{flex: 3}}>
			    	<Text>Profile Content</Text>
			    </View>
		    </View>
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
	},
	profileContainer: {
	    flex: 1,
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    backgroundColor: '#800080'
	},
	profileName: {
		fontSize: 18,
	    color: 'white'
	},
})