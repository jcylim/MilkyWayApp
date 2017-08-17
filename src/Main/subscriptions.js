import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet } from 'react-native';

export default class Subscriptions extends Component {

	render() {
		return (
	    	<View style={styles.container}>
	    		<Text style={styles.textContainer}>Subscriptions tab</Text>
	    	</View>
	    );
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#800080'
	},
	textContainer: {
		color: 'white'
	}
})