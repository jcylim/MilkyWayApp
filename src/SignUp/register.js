import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Image, ToastAndroid} from 'react-native';

export default class Register extends Component {

/*	static propTypes = {
		alertWithType: PropTypes.func,
	    navigation: PropTypes.object,
	}
*/
	constructor() {
      super();
      this.state = {
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        passwordConfirm: '',
        valid: false
      };
  	}


	async registrationValidationTest() {
		try {
    		let response = await fetch('http://milkywayapp.me:8080/api/auth/signup', {
    			/*let responseJson = await response.json();
		    	return responseJson.users;*/
		    	method: 'POST',
		    	headers: {
		    		'Accept': 'application/json',
		    		'Content-Type': 'application/json'
		    	},
		    	body: JSON.stringify({
		    		firstName: this.state.firstName,
		    		lastName: this.state.lastName,
		    		username: this.state.userName,
		    		email: this.state.email,
		    		password: this.state.password
		    	})
    		});
    		let res = await response.json();
    		if (response.status == 202) {
    			ToastAndroid.show(res['message'], ToastAndroid.LONG); 
    		}
    		else if (response.status == 400) {
    			ToastAndroid.show(res['message'], ToastAndroid.LONG);
    		}
    		else { this.setState({ valid: true }) }
    		return this.state.valid;
    	} catch(errors) {
		    // Handle error
		    //console.error(error);
		    /*let listErrors = errors.json();
		    let errorsList = [];
		    for (let key in listErrors) {
		    	errorsList.push(listErrors[key]);
		    }
			this.setState({errors: errorsList});
		    ToastAndroid.show(errors, ToastAndroid.LONG);*/
		}
  	};

  	onCreatePressed = () => {
  		if (this.registrationValidationTest == true) {
  			this.props.navigation.navigate('PhoneRegister');
  		}
  		else {
  			this.props.navigation.navigate('PhoneRegister');
  		}
  	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.backButtonContainer}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
      						<Image
	        					style={styles.backButton}
	        					source={require('../icons/back_arrow.png')}
	      					/>
    					</TouchableOpacity>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Register</Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInput 
						onChangeText={(fName) => this.setState({firstName: fName})}
						placeholder='First Name'
						style={styles.nameInput}
					/>
					<TextInput 
						onChangeText={(lastN) => this.setState({lastName: lastN})}
						placeholder='Last Name'
						style={styles.nameInput}
					/>
				</View>
				<View style={styles.viewContainer}>
					<TextInput 
						onChangeText={(userN) => this.setState({userName: userN})}
						placeholder='User Name'
						style={styles.input}
					/>
					<TextInput 
						onChangeText={(e) => this.setState({email: e})}
						placeholder='Email (e.g. name@example.com)'
						style={styles.input}
					/>
					<TextInput 
						onChangeText={(pW) => this.setState({password: pW})}
						placeholder='Passowrd'
						style={styles.input}
						secureTextEntry
					/>
					<TextInput 
						onChangeText={(pWConfirm) => this.setState({passwordConfirm: pWConfirm})}
						placeholder='Confirm Password'
						style={styles.input}
						secureTextEntry
					/>
					<TouchableOpacity style={styles.buttonContainer} onPress={this.onCreatePressed.bind(this)}>
						<Text style={styles.createButton}>CREATE</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#800080'
	},
	viewContainer: {
		paddingVertical: 10,
		flex: 5,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	inputContainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	nameInput: {
		height: 60,
		width: 180,
		paddingHorizontal: 10,
		color: 'white'
	},
	input: {
		height: 60,
		width: 360,
		opacity: 0.9,
		color: 'white',
	},
	text: {
		fontSize: 35,
		fontWeight: 'bold',
		color: 'white'
	},
	textContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		//paddingB: 1
	},
	buttonContainer: {
		width: 200,
		paddingVertical: 20,
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 10
	},
	createButton: {
		fontWeight: 'bold'
	},
	backButton: {
		width: 35,
		height: 35
	},
	backButtonContainer: {
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 7
	}
});
