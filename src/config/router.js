import React from 'react';
import { TabNavigator, StackNavigator, TabBarTop, TabBarBottom } from 'react-navigation';
import { Image } from 'react-native';

import Login from '../Login/login';
import Register from '../SignUp/register';
import PhoneRegister from '../SignUp/phoneRegister';
import Explore from '../Main/explore';
import ControlPanel from '../components/controlPanel'
import Subscriptions from '../Main/subscriptions';
import Points from '../Main/points';
import Activity from '../Main/activity';
import Profile from '../Main/profile';
import Setting from '../Main/setting';
import CodeVerification from '../SignUp/codeVerification';
//import BusinessCard from '../SignUp/codeVerification';

/*const MainTabs = TabNavigator({
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
    screen: Explore,
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
});*/

const ControlPanelStack = StackNavigator({
  ControlPanel: {
    screen: ControlPanel, 
    navigationOptions: {
      header: null
  }},
  Subscriptions: { 
    screen: Subscriptions, 
    navigationOptions: {
      header: null
    }},
  Activity: { 
    screen: Activity, 
    navigationOptions: {
      header: null
    }},
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }},
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: null,
    }},
  Points: {
    screen: Points,
    navigationOptions: {
      header: null,
    }},
}, {
  initialRouteName: 'Explore'
});

const prevGetStateForActionControlPanelStack = ControlPanelStack.router.getStateForAction;
  ControlPanelStack.router = {
    ...ControlPanelStack.router,
    getStateForAction(action, state) {
      if (state && action.type == 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
          ...state,
          routes,
          index: routes.length - 1,
        };
      }
      return prevGetStateForActionControlPanelStack(action, state);
    },
};

const MainStack = StackNavigator({
  Explore: {
    screen: ControlPanel, 
    navigationOptions: {
      header: null
  }},
  Subscriptions: { 
    screen: Subscriptions, 
    navigationOptions: {
      header: null
    }},
  Activity: { 
    screen: Activity, 
    navigationOptions: {
      header: null
    }},
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }},
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: null,
    }},
  Points: {
    screen: Points,
    navigationOptions: {
      header: null,
    }},
}, {
  initialRouteName: 'Explore'
});

const prevGetStateForActionControlPanelStack = ControlPanelStack.router.getStateForAction;
  ControlPanelStack.router = {
    ...ControlPanelStack.router,
    getStateForAction(action, state) {
      if (state && action.type == 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
          ...state,
          routes,
          index: routes.length - 1,
        };
      }
      return prevGetStateForActionControlPanelStack(action, state);
    },
};

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
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      header: null,
    },   
  }
});

const prevGetStateForActionMilkyWayStack = MilkyWayStack.router.getStateForAction;
    MilkyWayStack.router = {
    ...MilkyWayStack.router,
    getStateForAction(action, state) {
      if (state && action.type == 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
          ...state,
          routes,
          index: routes.length - 1,
        };
      }
      return prevGetStateForActionMilkyWayStack(action, state);
    },
};

export default ControlPanelStack;