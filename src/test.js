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
import { NavigationActions } from 'react-navigation'
import { Card, ListItem, Button, Tile, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'

/*import MWMap from '../components/map'
import { samples } from '../components/businessInfo';
import ExploreContent from '../components/exploreContent'
import Search from '../components/searchButton'*/
import Navigation from './components/navigation'
import QRScanner from './Main/qrScanner'

let listener = null

export default class Explore extends Component {

  componentDidMount() {
      if (Platform.OS == "android" && listener == null) {
        listener = BackHandler.addEventListener("hardwareBackPress", () => {
          BackHandler.exitApp();
        })
      }
    }

  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
  }

  signOut = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Login',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  profileScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Profile',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  activityScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Activity',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  pointsScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Points'
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
  };

  settingScreen = () => {
    const navAction = NavigationActions.navigate({
      routeName: 'Setting',
      // navigate can have a nested navigate action that will be run inside the child router
      //action: NavigationActions.navigate({ routeName: 'Explore'})
    })
    this.props.navigation.dispatch(navAction);
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

    openDrawer() {
      this.drawer.openDrawer();
    }

    closeDrawer() {
      this.drawer.closeDrawer();
    }

    searchPressed = () => {
      ToastAndroid.show('pressed', ToastAndroid.LONG)
    };

  render() {
    return (
      <Swiper 
          style={styles.wrapper}
          showsPagination={false}
          loop={false}
          >
          <DrawerLayoutAndroid
            drawerWidth={250}
            ref={(_drawer) => this.drawer = _drawer}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => this.navigationView()}>
            <View style={styles.container}>
              <Navigation />
            </View>
          </DrawerLayoutAndroid>
          <QRScanner />
      </Swiper>
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
        //marginBottom: 10,
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
  cardsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  button: {
    width: 30,
    height: 30
  },
  image: {
    width: 40,
    height: 40
  },
  extraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  profilePic: {
    width: 80,
    height: 80,
  },
  profileName: {
    fontSize: 18,
    color: '#800080'
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logout: {
    width: 200,
    height: 30,
    backgroundColor: '#800080',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  logoutButton: {
    fontSize: 15, 
    color: 'white', 
  },
  navSection: {
    flex: 2, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
  },
  navTabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  contentContainer: {
    flex: 2
  }
})