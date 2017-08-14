import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from '../Login/login';
import Register from '../SignUp/register';
import PhoneRegister from '../SignUp/phoneRegister';
import Explore from '../Main/explore';
import CodeVerification from '../SignUp/codeVerification';

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
    screen: Explore,
    navigationOptions: {
      header: null
    },   
  }
});

export default MilkyWayStack;