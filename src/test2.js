import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ToastAndroid, 
  DrawerLayoutAndroid, 
  TouchableOpacity,
  TouchableHighlight, 
  BackHandler, 
  Platform, 
  StatusBar, 
  Image,
  ListView,
  ScrollView,
  Dimensions
   } from 'react-native';
import Drawer from 'react-native-drawer'

export default class Application extends Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  navigationView() {
    return(
      <View style={{flex: 2, backgroundColor: 'transparent'}}>
        <View style={styles.profileContainer}>
          <Avatar
        large
        rounded
        icon={{name: 'person', color: '#800080'}}
        //source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
      />
          <Text style={styles.profileName}>Jonathan Lim</Text>
        </View>
        <View style={styles.navSection}>
          <View style={styles.navTabContainer}>
            <TouchableOpacity 
              style={{width: 250, height: 30, paddingHorizontal: 10}}
              onPress={this.profileScreen}
              >
              <View style={{flexDirection: 'row'}}>
                <Icon  
                  name='account-box'
                  size={30}
                />
            <Text style={{color: '#800080', fontSize: 20}}>  Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.navTabContainer}>
            <TouchableOpacity 
              style={{width: 250, height: 30, paddingHorizontal: 10}}
              onPress={this.pointsScreen}
              >
              <View style={{flexDirection: 'row'}}>
                <Icon  
                  name='loyalty'
                  size={30}
                />
            <Text style={{color: '#800080', fontSize: 20}}>  Points</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.navTabContainer}>
            <TouchableOpacity 
              style={{width: 250, height: 30, paddingHorizontal: 10}}
              onPress={this.activityScreen}
              >
              <View style={{flexDirection: 'row'}}>
                <Icon  
                  name='assessment'
                  size={30}
                />
            <Text style={{color: '#800080', fontSize: 20}}>  Activity</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.navTabContainer}>
            <TouchableOpacity 
              style={{width: 250, height: 30, paddingHorizontal: 10}}
              onPress={this.settingScreen}
              >
          <View style={{flexDirection: 'row'}}>
                <Icon  
                  name='settings'
                  size={30}
                />
            <Text style={{color: '#800080', fontSize: 20}}>  Setting</Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity 
            style={styles.logout}
            onPress={this.signOut}
            >
        <Text style={styles.logoutButton}>Sign Out</Text>
      </TouchableOpacity>
        </View>
      </View>
    )
  }

  render () {
    return (
      <Drawer
        type="overlay"
        content={this.navigationView()}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
          <View style={styles.container}>
            <View style={styles.navBarContainer}>
              <View style={styles.profileButtonContainer}>
                <TouchableOpacity onPress={this.openDrawer}>
                  <Image
                    style={styles.button}
                    source={require('./icons/profile.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>  
                <Image
                  style={styles.image}
                  source={require('./images/spiral_white.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.extraContainer}>
                <TouchableOpacity >
                  <Image
                    style={styles.button}
                    source={require('./icons/subs.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}