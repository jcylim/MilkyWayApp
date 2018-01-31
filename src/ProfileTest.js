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
	Dimensions,
	Image } from 'react-native';
import { Avatar } from 'react-native-elements'

const { width, height } = Dimensions.get('window');
export default class Profile extends Component {

	render() {
		return (
			<View style={styles.container}>
		    	<View style={styles.profileContainer}>
		    		<View style={{justifyContent: 'space-around'}}>
		    			<Avatar
					        xlarge
					        rounded
					        icon={{name: 'person', color: 'white'}}
					        //source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
					    />
					    <Text style={{textAlign: 'center', color: 'white', fontSize: 20, marginTop: 5}}>Jonathan Lim</Text>
		    		</View>
				    <View style={styles.profileInfoContainer}>
				    	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
				    		<Text style={styles.profileName}>100 Friends</Text>
				    	</View>
				    	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				    		<Text style={styles.profileName}>100 Memberships</Text>
				    	</View>
				    	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				    		<Text style={styles.profileName}>Sth</Text>
				    	</View>
				    </View>
			    </View>
			    <View style={{flex: 3}}>
			    	<Text style={styles.walletText}>My Wallet</Text>
			    	<Text style={styles.walletText}>Balance</Text>
			    	<Text style={styles.walletText}>Ethers</Text>
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
	    flex: 2,
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    backgroundColor: '#800080'
	},
	profileInfoContainer: {
		//flex: 1,
		width: width,
		height: 50,
		justifyContent: 'space-between',
	    alignItems: 'center',
	    flexDirection: 'row',
	    //backgroundColor: 'white',
	},
	profileName: {
		fontSize: 15,
	    color: 'white',
	    //marginRight: 10
	},
	walletText: {
		fontSize: 20,
		marginTop: 5,
	    color: '#800080',
	    marginLeft: 8,
	}
})