import React, { Component, PropTypes } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Drawer from 'react-native-drawer'
import Swiper from 'react-native-swiper'

import ControlPanel from './components/controlPanel'
import Main from './components/main'
import QRScanner from './Main/qrScanner'

export default class App extends Component {

  state={
    drawerOpen: false,
    drawerDisabled: false,
  };

  closeDrawer = () => {
    this._drawer.close()
  };

  openDrawer = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Swiper
        showsPagination={false}
        loop={false}
      >
        <Drawer
          type="overlay"
          content={<ControlPanel />}
          tapToClose={true}
          openDrawerOffset={0.4} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
            <Main />
        </Drawer>
        <QRScanner />
      </Swiper>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#800080', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}