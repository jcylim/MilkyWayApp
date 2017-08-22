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

export default class Setting extends Component {

	render() {
		return (
			<View style={styles.container}>
		    	<Text>IM IN SETTINGS </Text>
		    	<TouchableOpacity
			        onPress={() => this.props.navigation.goBack()}
			        title="Go back home"
			    />
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
	}
})