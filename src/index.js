/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MilkyWayStack from './config/router'
import Explore from './Main/explore';
import NearMeMap from './Main/nearMeMap';
import SearchMap from './Main/searchMap';
import Memberships from './Main/subscriptions';
import BusinessInfoPage from './Main/businessInfoPg';
import Register from './SignUp/register';
import PR from './SignUp/phoneRegister';
import ExploreContent from './components/exploreContent'
import Search from './components/searchButton'
import BusinessInfoTest from './BusinessInfoTest'
import ProfileTest from './ProfileTest'
import UserGraph from './components/userGraph'
import SearchMapTest from './SearchMapTest'
import ActivityTest from './ActivityTest'

export default class MilkyWayApp extends Component {
  render() {
    return (
      <ProfileTest />
    );
  }
}