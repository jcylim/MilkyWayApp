import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

export default class PhoneRegister extends Component {

	constructor() {
		super();
		this.state = {
			num1: '',
			num2: '',
			num3: '',
			num4: '',
			num5: '',
			num6: '',
			num7: '',
			num8: '',
			num9: '',
			num10: '',
		};
		this.focusNextNum = this.focusNextNum.bind(this);
		this.inputs = {};
	}

	focusNextNum(nextNum) {
    	this.inputs[nextNum].focus();
  	}

  	nextStep() {
  		this.props.navigation.navigate('CodeVerification');
  	}

	render() {
		return (
			<View style={styles.container}>
				{/*<View style={styles.backButtonContainer}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
      						<Image
	        					style={styles.backButton}
	        					source={require('../icons/back_arrow.png')}
	      					/>
    					</TouchableOpacity>
				</View>*/}
				<View style={styles.textContainer}>
					<Text style={styles.text}>Enter Phone Number</Text>
				</View>
				<View style={styles.extraContainer}>
					<View style={styles.numInputContainer}>
						<TextInput 
							autoFocus={true}
							onChangeText={(num1) => this.setState({num1: num1})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={false}
				          	onChange={() => {
				            	this.focusNextNum('2');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['1'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num2) => this.setState({num2: num2})}
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
							onChangeText={(num3) => this.setState({num3: num3})}
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
						<Text style={styles.dash}>—</Text>
						<TextInput 
							onChangeText={(num4) => this.setState({num4: num4})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('5');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['4'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num5) => this.setState({num5: num5})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('6');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['5'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num6) => this.setState({num6: num6})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('7');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['6'] = input;
				          	}}
						/>
						<Text>—</Text>
						<TextInput 
							onChangeText={(num7) => this.setState({num7: num7})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('8');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['7'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num8) => this.setState({num8: num8})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('9');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['8'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num9) => this.setState({num9: num9})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ false }
				          	onChange={() => {
				            	this.focusNextNum('10');
				          	}}
				          	returnKeyType={ "next" }
				          	ref={ input => {
				            	this.inputs['9'] = input;
				          	}}
						/>
						<TextInput 
							onChangeText={(num10) => this.setState({num10: num10})}
							style={styles.numInput}
							keyboardType='phone-pad'
							maxLength={1}
							blurOnSubmit={ true }
				          	returnKeyType={ 'done' }
				          	onChange={() => {
				          		this.nextStep();
				          	}}
				          	ref={ input => {
				            	this.inputs['10'] = input;
				          	}}
						/>
					</View>
					<View style={styles.extraViewContainer}></View>
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
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	numInputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
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
		fontSize: 30,
		alignItems: 'center',
		textAlign: 'center'
	},
	/*backButton: {
		width: 35,
		height: 35
	},
	backButtonContainer: {
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 7
	},*/
	extraViewContainer: {
		flex: 5
	}
});