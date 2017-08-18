import React from 'react';
import { TabNavigator, StackNavigator, TabBarTop, TabBarBottom, DrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Login from '../Login/login';
import Register from '../SignUp/register';
import PhoneRegister from '../SignUp/phoneRegister';
import ExploreContent from '../Main/explore';
import Subscriptions from '../Main/subscriptions';
import Points from '../Main/points';
import CodeVerification from '../SignUp/codeVerification';
import DrawerScreen from '../Main/drawer';

const DrawerContent = DrawerNavigator({
  Home: {
    screen: ExploreContent,
    navigationOptions: {
      header: null
    }
  },
  Drawer: {
    screen: DrawerScreen,
  },
},
  {
    drawerWidth: 200,
    //contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
  }
);

const MainTabs = TabNavigator({
  Subscriptions: {
    screen: Subscriptions,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image 
          color={tintColor}
          size={50}
          source={require('../icons/subs.png')}
        />
      ),
    }},
  Explore: {
    screen: DrawerContent,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          color={tintColor}
          size={50}
          source={require('../icons/explore.png')}
        />
      ),
    }},
  Points: {
    screen: Points,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          color={tintColor}
          size={50} 
          source={require('../icons/points.png')}
        />
      ),
    }},
}, {
  initialRouteName: 'Explore',
  tabBarOptions: { 
    showIcon: true,
    showLabel: false,
    style: { 
      backgroundColor: '#800080',
    },
    indicatorStyle: { backgroundColor: 'white' }
  },
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarTop,
});

const MilkyWayStack = StackNavigator({
  Login: { 
  	screen: Login, 
  	navigationOptions: {
  		header: null
  	}},
  Register: { 
  	screen: Register, 
  	navigationOptions: {
  		header: null
  	}},
  PhoneRegister: {
    screen: PhoneRegister,
    navigationOptions: {
      header: null
    }},
  CodeVerification: {
    screen: CodeVerification,
    navigationOptions: {
      header: null
    }},
  MainTabs: {
    screen: MainTabs,
    navigationOptions: {
      header: null,
    },   
  }
});

/*const prevGetStateForActionHomeStack = HomeStack.router.getStateForAction;
HomeStack.router = {
  ...HomeStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionHomeStack(action, state);
  },
};*/

export default MainTabs;