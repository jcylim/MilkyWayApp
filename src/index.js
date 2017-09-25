/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MilkyWayStack from './config/router'
import Explore from './Main/explore';
import NearMeMap from './Main/nearMeMap';
import BusinessInfoPage from './Main/businessInfoPg';
import Register from './SignUp/register';
import PR from './SignUp/phoneRegister';
import ExploreContent from './components/exploreContent'
import Search from './components/searchButton'
import Test from './test'
import Test2 from './test2'
import State from './state'

export default class MilkyWayApp extends Component {
  render() {
    return (
      <Test />
    );
  }
}