import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchOpacity, BackAndroid, Platform, ToastAndroid } from 'react-native';
import {  NavigationActions } from 'react-navigation'

/*// Default behavior: returning false exits the app.
let backButtonPressFunction = () => false*/

export default class CodeVerification extends Component {

	/*// Only mount the listener once. In the body of the listener, invoke
	// the function defined on line 10
	componentDidMount() {
	    if (Platform.OS == "android" && listener == null) {
	      listener = BackAndroid.addEventListener("hardwareBackPress", () => {
	        return backButtonPressFunction()
	      })
	    }
	 }  */

	constructor() {
		super();
		this.states = {
			num1: '',
			num2: '',
			num3: '',
			num4: ''
		};
		this.focusNextNum = this.focusNextNum.bind(this);
		this.inputs = {};
	}

	focusNextNum(nextNum) {
    	this.inputs[nextNum].focus();
  	}

  	nextStep() {
  		const navAction = NavigationActions.navigate({
		  routeName: 'Explore',
		  // navigate can have a nested navigate action that will be run inside the child router
		  //action: NavigationActions.navigate({ routeName: 'Explore'})
		})
		this.props.navigation.dispatch(navAction);
  	}

  	/*nextStep = () => {
		const navAction = NavigationActions.navigate({
		  routeName: 'Explore',
		  // navigate can have a nested navigate action that will be run inside the child router
		  //action: NavigationActions.navigate({ routeName: 'Explore'})
		})
		this.props.navigation.dispatch(navAction);
	};*/

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Enter Verification Code</Text>
				</View>
				<View style={styles.numInputContainer}>
					<TextInput 
						autoFocus={ true }
						onChangeText={(num1) => this.setState({num1: num1})}
						style={styles.numInput}
						keyboardType='phone-pad'
						maxLength={1}
						blurOnSubmit={ false }
			          	onChange={() => {
			            	this.focusNextNum('2');
			          	}}
			          	returnKeyType={ "next" }
			          	ref={ input => {
			            	this.inputs['1'] = input;
			          	}}
					/>
					<TextInput 
						onChangeText={(num2) => this.setState({num1: num2})}
						style={styles.numInput}
						keyboardType='phone-pad'
						maxLength={1}
						blurOnSubmit={ false }
			          	onChange={() => {
			            	this.focusNextNum('3');
			          	}}
			          	returnKeyType={ "next" }
			          	ref={ input => {
			            	this.inputs['2'] = input;
			          	}}
					/>
					<TextInput 
						onChangeText={(num3) => this.setState({num1: num3})}
						style={styles.numInput}
						keyboardType='phone-pad'
						maxLength={1}
						blurOnSubmit={ false }
			          	onChange={() => {
			            	this.focusNextNum('4');
			          	}}
			          	returnKeyType={ "next" }
			          	ref={ input => {
			            	this.inputs['3'] = input;
			          	}}
					/>
					<TextInput 
						onChangeText={(num4) => this.setState({num1: num4})}
						style={styles.numInput}
						keyboardType='phone-pad'
						maxLength={1}
						blurOnSubmit={ true }
			          	onChange={() => {
			          		this.nextStep();
			          	}}
			          	returnKeyType={ 'done' }
			          	ref={ input => {
			            	this.inputs['4'] = input;
			          	}}
					/>	
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#800080'
	},
	textContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	numInputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	extraContainer: {
		flex: 2,
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',

	},
	numInput: {
		color: 'white',
		fontSize: 45,
		alignItems: 'center',
		textAlign: 'center',
		width: 70,
		height: 70
	}
})