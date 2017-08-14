/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MilkyWayStack from './config/router';
import Explore from './Main/explore';

export default class MilkyWayApp extends Component {
  render() {
    return (
      <MilkyWayStack />
    );
  }
}