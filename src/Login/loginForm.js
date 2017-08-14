import React, { Component } from 'react';
import { View, Text, StyleSheet, Image , TextInput, TouchableOpacity, Card} from 'react-native';

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
	}

	signUp = () => {
		this.props.navigation.navigate('Register');
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Username or Email'
						style={styles.input}
						keyboardType='email-address'
						autoCapitalize='none'
						//autoCorrect={false}
					/>
					<TextInput 
						placeholder='Password'
						style={styles.input}
						secureTextEntry
					/>
				</View>
				<View  style={styles.loginContainer}>
					<TouchableOpacity style={styles.login}>
						<Text>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>New to MilkyWay? </Text>
					<TouchableOpacity style={styles.signUpContainer} onPress={this.signUp}>
						<Text style={styles.text}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#800080',
	},
	input: {
		height: 40,
		width: 300,
		opacity: 0.9,
		color: '#800080'
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	login: {
		width: 200,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontSize: 15,
	},
	signUpContainer: {
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	textContainer: {
		flex: 1,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
	}
});