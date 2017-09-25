import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  ListView,
  Animated,
  Modal,
  TouchableHighlight 
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MapView from 'react-native-maps';

import { samples } from './components/businessInfo'

const { width, height } = Dimensions.get('window')
const screenHeight = height
const screenWidth = width
const aspectRatio = width/height
const latDelta = 0.0922
const longDelta = latDelta*aspectRatio
const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2}); 
//const loading = require('./img/loading.gif')

const Slide = props => {
  return (
    <View style={styles.slide}>
      {/*<TouchableOpacity onPress={this.test}>
        <Image style={styles.image} source={{uri: props.uri}} />
      </TouchableOpacity>*/}
      <Image style={styles.image} source={{uri: props.uri}} />
    </View>
  )
}

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadQueue: [0, 0, 0, 0],
      dataSource: ds.cloneWithRows(samples),
      isLoaded: false,
      isOpenMenu: false,
      animated: new Animated.Value(1),
      detailsModalVisible: false,
      referModalVisible: false,
      /*rotateY: new Animated.Value(0),
      translateX: new Animated.Value(width),
      menuAnimation: new Animated.Value(0),*/
      text: '',
      joinButtonState: false,
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }, 
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    };
    this.setDetailsModalVisible = this.setDetailsModalVisible.bind(this)
    this.setReferModalVisible = this.setReferModalVisible.bind(this)
    //this.test = this.test.bind(this)
    //this.loadHandle = this.loadHandle.bind(this)
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta
      }
      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    }, 
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion}) 
    }) 
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  setDetailsModalVisible(visible) {
    this.setState({detailsModalVisible: visible,});
  }

  setReferModalVisible(visible) {
    this.setState({referModalVisible: visible,});
  }

  testList = () => {
    ToastAndroid.show('reward selected', ToastAndroid.LONG);
  };

  _renderRow(rowData) {
    //ToastAndroid.show('in renderrow:' + String(textInputted), ToastAndroid.LONG)
    return(
      <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity 
          style={{paddingVertical: 5, alignItems: 'center', justifyContent: 'center'}}  
          onPress={this.testList}>
            <Text style={{fontSize: 15}}>{"rowData.image"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }

  _joinPressed() {
    const newJoinButtonState = !this.state.joinButtonState
    this.animatedButton(newJoinButtonState)
    this.setState({joinButtonState: newJoinButtonState})
  }

  animatedButton(newJoinButtonState) {
    this.state.animated.setValue(newJoinButtonState?1:0)
    Animated.timing(this.state.animated, {
      toValue: newJoinButtonState?0:1,
      duration: 500
    }).start();
  }

  render () {
    const { joinButtonState, animated } = this.state
    const selection = joinButtonState?"JOINED":"JOIN!"
    const textColor = joinButtonState?'#800080':'white'
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.detailsModalVisible}
          presentationStyle='pageSheet'
          onRequestClose={() => {console.log("Details modal has been closed.")}}>
            <View style={styles.modalContainer}>
              <View>
                <TouchableOpacity onPress={() => {this.setDetailsModalVisible(!this.state.detailsModalVisible)}}>
                  <Icon  
                    name='close'
                    size={35}
                    color='#800080' 
                  />
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.referModalVisible}
          presentationStyle='pageSheet'
          onRequestClose={() => {console.log("Refer modal has been closed.")}}>
            <View style={styles.modalContainer}>
              <View>
                <TouchableOpacity onPress={() => {this.setReferModalVisible(!this.state.referModalVisible)}}>
                  <Icon  
                    name='close'
                    size={35}
                    color='#800080' 
                  />
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <View style={{flex: 1}}>
          <Swiper 
            loadMinimal 
            loadMinimalSize={1}
            containerStyle={{width: width}}
            showsPagination={false}
            style={styles.wrapper} 
            loop={false}>
              {
                samples.map((item, i) => 
                  <Slide
                    /*loadHandle={this.loadHandle}
                    loaded={!!this.state.loadQueue[i]}*/
                    uri={item.image}
                    i={i}
                    key={i} />
                )
              }
          </Swiper> 
        </View>   
        <View style={{flex: 2}}>
          <ScrollView
            style={{flex: 1}}
            //scrollEventThrottle={200}
            containerStyle={{width: width}}
            removeClippedSubviews={false}
            directionalLockEnabled={true}>
              <View style={{justifyContent: 'space-between', paddingHorizontal: 5}}>
                <Text style={{fontSize: 18, color: 'black'}}>Business Name</Text>
                <Text style={{fontSize: 15, color: 'black', fontStyle: 'italic'}}>Business Address</Text>
                <Text style={{fontSize: 15, color: 'black', fontStyle: 'italic'}}>Open Hours</Text>
              </View>
              <View style={styles.joinContainer}>
                <TouchableOpacity 
                  style={styles.joinButton}
                  onPress={() => this._joinPressed()}>
                  <Animated.View style={{
                    flex: 1,
                    position: 'absolute',
                    left: 0, right: 0, top: 0, bottom: 0, 
                    backgroundColor: '#800080',
                    borderRadius: 30,
                    width: width - 10,
                    justifyContent: 'center',
                    transform:[
                      {
                        scale: animated.interpolate({
                          inputRange:[0, 1],
                          outputRange:[0, 1]
                        })
                      }]
                    }}>
                  </Animated.View>
                  <Text style={{color: textColor, fontSize: 20, textAlign: 'center'}}>{selection}</Text>
                </TouchableOpacity>
              </View>
              {joinButtonState && <MemberOptions 
                onDetailsPress={this.setDetailsModalVisible} 
                onReferPress={this.setReferModalVisible}
                data={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                />}
              <View style={styles.offersContainer}>
                <Text style={{color: '#800080', fontSize: 20}}>Promotions</Text>
                <ListView
                  enableEmptySections={true}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                />
              </View>
              <View style={{paddingTop: 10, paddingBottom: 5, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.goToLocationContainer}>
                  <Text style={{color: 'white', fontSize: 18, paddingLeft: 15}}>Go to location</Text>
                  <Icon  
                    name='chevron-right'
                    size={30}
                    color='white' 
                  />
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MapView
                  style={{width: width*0.95, height: height*0.3}}
                  region={ this.state.initialPosition }
                  showsMyLocationButton>
                    {samples.map((location, i) => {
                      return (
                        <MapView.Marker
                          key={i}
                          coordinate={location.coordinate}/>
                      );
                    })}
                    <MapView.Marker
                      coordinate={ this.state.markerPosition }/>
                </MapView>
              </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

class MemberOptions extends Component {
  constructor(props) {
    super(props)
    this.setDetailsModalVisible = this.props.onDetailsPress;
    this.setReferModalVisible = this.props.onReferPress;
    this.dataSource = this.props.data;
    this._renderRow = this.props.renderRow;
  }

  render() {
    return(
      <View>
        <View style={styles.memberOptionsContainer}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.setReferModalVisible(true)}>
              <Icon  
                name='group'
                size={35}
                color='#800080' 
              />
              <Text style={{textAlign: 'center'}}>Refer</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{color: '#800080', fontSize: 30}}>0</Text>
            <Icon  
              name='monetization-on'
              size={30}
              color='#800080' 
            />
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.setDetailsModalVisible(true)}>
              <Icon  
                name='info'
                size={35}
                color='#800080' 
              />
              <Text style={{textAlign: 'center'}}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.offersContainer}>
          <Text style={{color: '#800080', fontSize: 20}}>Redeem</Text>
          <ListView
            enableEmptySections={true}
            dataSource={this.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {

  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  },
  joinButton: {
    backgroundColor: 'white',
    width: width - 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#800080'
  },
  joinContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 10,
  },
  offersContainer: {
    paddingHorizontal: 15,
    paddingTop: 10
  },
  memberOptionsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingTop: 10,
    //backgroundColor: 'black'
  },
  modalContainer: {
    flex: 1,
    marginTop: height*0.05,
    marginBottom: height*0.05,
    marginLeft: width*0.05,
    marginRight: width*0.05,
    backgroundColor: 'white'
  },
  goToLocationContainer: {
    width: width - 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: '#800080',
    //borderWidth: 10,
    borderColor: 'white'
  }
}