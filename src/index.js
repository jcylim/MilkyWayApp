/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MilkyWayStack from './config/router'
import Explore from './Main/explore';
import Register from './SignUp/register';
import PR from './SignUp/phoneRegister';
import Test from './test'

export default class MilkyWayApp extends Component {
  render() {
    return (
      <Test />
    );
  }
}