import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	ScrollView,
	Dimensions,
	ListView,
	TouchableHighlight,
	Image,
	TouchableOpacity,
	TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons' 

import UserGraph from '../components/userGraph'
import { samples } from '../components/businessInfo'

const { width, height } = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class Memberships extends Component {
	constructor(props){
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows(samples),
            text: ''
        }
    }

     renderRow(rowData){
        const img = rowData.image
        return (
            <TouchableOpacity style={styles.containerCell}>
                <View>
                    <Image 
                        style={{width: width, height: 180}}
                        source={{uri: img}}/>
                    <View style={styles.footerContainer}>
                        <View style={{padding: 5}}>
                            <Text style={styles.text}>Number of points</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    filterSearch(text){
        const newData = samples.filter(function(item){
            const businessData = item.image.toUpperCase()
            const textData = text.toUpperCase()
            return businessData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

	render() {
		return (
	    	<View style={styles.container}>
		        <ScrollView
	            style={{flex: 1}}
	            //scrollEventThrottle={200}
	            directionalLockEnabled={true}>
	          		<View style={{padding: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
			          <Text style={{color: '#800080', fontSize: 50}}>10000</Text>
			          <Icon  
			            name='monetization-on'
			            size={50}
			            color='#800080' 
			          />
			        </View>
			        <UserGraph />
			        <View style={{padding: 10}}>
			        	<Text>Exchange Points</Text>
			        </View>
			        <View>
			        	<Text style={{paddingBottom: 5, color: '#800080', fontSize: 20, textAlign: 'center'}}>Memberships</Text>
			        </View>
			        <TextInput 
                        style={styles.textInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        selectionColor='#800080'
                        clearButtonMode='while-editing'
                        clearTextOnFocus={true}
                        placeholder='Search'
                        onChangeText={(text) => this.filterSearch(text)}
                        value={this.state.text}
                    />
			        <ListView 
                        enableEmptySections={true}
                        style={{marginHorizontal: 10}}
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.dataSource}
                    />
	          	</ScrollView>
	    	</View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: '#800080'
	},
	textContainer: {
		//color: 'white'
	},
	textInput: {
        height: 35,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#800080',
        marginBottom: 10,
        marginHorizontal: 10,
        fontSize: 14,
        justifyContent: 'center'
    },
})