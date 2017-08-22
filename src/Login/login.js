import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, BackHandler, ToastAndroid} from 'react-native';
import LoginForm from './loginForm';
import FBSDK, { LoginManager, AccessToken, LoginButton, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

let listener = null
var userAccessToken;
var userJSON;

export default class Login extends Component {
	constructor(props) {
		super(props);
		//this.storeUserInfo = this.storeUserInfo.bind(this);
		this._responseInfoCallback = this._responseInfoCallback.bind(this);
		this.sendDataToServer = this.sendDataToServer.bind(this);
		this.states = {
			firstName: '',
			lastName: '',
			email: '',
			userName: '',
			profilePic: ''
		};
	}

	_responseInfoCallback(error: ?Object, result: ?Object) {
		console.log('in callback');
	    if (error) {
	      //alert('Error fetching data: ' + error.toString());
	      console.log(Object.keys(error));// print all enumerable 
	      console.log(error.errorMessage); // print error message
	      // error.toString() will not work correctly in this case
	      // so let use JSON.stringify()WS json S
	      console.log(userJSON); // print JSON 
	    } else {
	      //alert('Success fetching data: ' + result.toString());S
	      console.log(Object.keys(result)); 
	      userJSON = JSON.stringify(result); // result => JSON
	      console.log(userJSON); // print JSON
	      this.sendDataToServer(userJSON);
	    } 
	}

	async sendDataToServer(json) {
		try {
			console.log('in sendDataToServer');
    		let response = await fetch('http://milkywayapp.me:8080/api/auth/signin', {
		    	method: 'POST',
		    	headers: {
		    		'Accept': 'application/json',
		    		'Content-Type': 'application/json'
		    	},
		    	body: JSON.stringify({
		    		firstName: json[first_name],
		    		lastName: json[last_name],
		    		username: json[id],
		    		email: json[email],
		    		password: 'MilkyWay08/05'
		    	})
    		});
    		let res = await response.json();
    		if (response.status == 400) {
    			this.props.navigation.navigate('Explore');
    		}
    		else {
    			console.log('inside response'); 
    		}
    	} catch(errors) {
		    // Handle error
		}
		console.log('out of sendDataToServer');
		this.props.navigation.navigate('Explore');
  	}

	componentDidMount() {
	    if (Platform.OS == "android" && listener == null) {
	      listener = BackHandler.addEventListener("hardwareBackPress", () => {
	        return false
	      })
	    }
  	}

	signUp = () => {
		this.props.navigation.navigate('Register');
	};

	/*storeUserInfo(token) {
		console.log('im in')
		fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
			.then((response) => response.json())
			.then((res) => {
			  this.states.firstName = res.first_name
			  this.states.lastName = res.last_name
			  this.states.userName = res.id
			  this.states.email = res.email
			  this.states.profilePic = setAvatar(res.id)      
			})
			.catch(() => {
			  reject('Unable to fetch data from FB')
			})
		console.log('im out')
	}*/

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.viewContainer}>
					<Image
						style={styles.logo}
						source={require('../images/logo_white.png')}
						resizeMode='contain'
					/>
				</View>
				<View style={styles.formContainer}>
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
					<View style={styles.extraContainer}>
						<View style={styles.apiViewContainer}>
							<LoginButton 
								onLoginFinished={
									(error, result) => {
							        if (error) {
							          console.log("login has error!" + result.error);
							        } else if (result.isCancelled) {
							          console.log("login is cancelled.");
							        } else {
							        	console.log('Login was successful with permissions: '
									        + result.grantedPermissions.toString());
									    AccessToken.getCurrentAccessToken().then(
									      	(data) => {
									      		userAccessToken = data.accessToken
									      		const infoRequest = new GraphRequest(
										          	'/me',
										          	{
										            	parameters: {
										              		fields: {
										                		string: 'email,id,first_name,last_name' // what you want to get
										              		},
										              		access_token: {
										                		string: userAccessToken.toString() // put your accessToken here
										              		}
										            	}
										          	},
										          	this._responseInfoCallback // make sure you define _responseInfoCallback in same class
										       	);
											    new GraphRequestManager().addRequest(infoRequest).start();
										})
							        }
							    }
							}/>
						</View>
						<View style={styles.textContainer}>
							<Text style={styles.text}>New to MilkyWay? </Text>
							<TouchableOpacity style={styles.signUpContainer} onPress={this.signUp}>
								<Text style={styles.signUp}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		width: 170,
		height: 170
	}, 
	viewContainer: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#800080'
	},
	formContainer: {
		backgroundColor: '#800080',
		flex: 1
	},
	title: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold'
	},
	input: {
		height: 50,
		width: 300,
		opacity: 0.9,
		color: 'white'
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
	signUp: {
		color: 'white',
		fontSize: 15,
		textDecorationLine: 'underline'
	},
	fbText: {
		color: 'white',
		fontSize: 15,
	},
	text: {
		color: 'white',
		fontSize: 15,
	},
	signUpContainer: {
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	extraContainer: {
		flex: 1,
	},
	textContainer: {
		flex: 1,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	apiViewContainer: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	apiContainer: {
		width: 180,
		height: 40,
		backgroundColor: '#3b5998',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

//export default Login;

