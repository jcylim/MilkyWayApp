import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    Image,
    Animated,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { Card, ListItem, Tile, SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { samples } from './components/businessInfo'

const {width, height} = Dimensions.get('window')

export default class App extends Component {
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            isLoaded: false,
            isOpenMenu: false,
            dataSource: ds.cloneWithRows(samples),
            rotateY: new Animated.Value(0),
            translateX: new Animated.Value(width),
            menuAnimation: new Animated.Value(0),
            text: ''
        }
    }

    componentDidMount() {
        //this.search.focus();
    }

    renderRow(rowData){
        const img = rowData.image
        return (
            <TouchableOpacity style={styles.containerCell}>
                <Image 
                    style={{width: width*.95 , height: 150}}
                    source={{uri: img}}/>
                <Text style={{fontSize: 15, color: '#800080'}}>Business Name</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12}}>Business Address</Text>
                    <Text style={{fontSize: 12}}>Number of Miles Away   </Text>
                </View>
            </TouchableOpacity>
        )
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
    render(){
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.content, {
                        width: width,
                        backgroundColor: 'white',
                        flex: 1,
                        transform: [
                            {
                                perspective: 450
                            },
                            {
                                translateX: this.state.translateX.interpolate({
                                    inputRange: [0, width],
                                    outputRange: [width, 0]
                                })
                            },
                            {
                                rotateY: this.state.rotateY.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '-10deg']
                                })
                            }
                        ]
                    }]}>
                    <SearchBar
                      ref={search => this.search = search}
                      lightTheme
                      round
                      value={this.state.text}
                      //showLoadingIcon={true}
                      //clearButtonMode='while-editing'
                      clearIcon={{ color: '#86939e', name: 'close' }}
                      icon={{color: '#800080'}}
                      onChangeText={(text) => this.filterSearch(text)}
                      placeholderTextColor='white'
                      placeholder='Look up a business here...' />
                    <ListView 
                        enableEmptySections={true}
                        style={styles.listContainer}
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.dataSource}
                        backgroundColor='white'/>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555566'
    },
    textInput: {
        width: width*0.95, 
        height: 35, 
        borderColor: '#800080', 
        borderWidth: 2,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    content: {
        zIndex: 1
    },
    footerContainer: {
       flexDirection: 'row',
       paddingHorizontal: 10,
       paddingVertical: 10,
       backgroundColor: '#555566' 
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    listContainer: {
        marginHorizontal: 10
    },
    text: {
        color: '#fff'
    },
    containerCell: {
        marginBottom: 10
    },
    textTitle: {
        fontSize: 13
    },
    textBy: {
        fontSize: 12
    },
    textMenu: {
        fontSize: 20,
        color: '#fff'
    }
})