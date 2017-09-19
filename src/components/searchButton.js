import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends Component {

  searchPressed = () => {
    ToastAndroid.show('pressed', ToastAndroid.LONG)
  };

  render() {
    return (
      <ActionButton 
        buttonColor="rgba(128,0,128, 0.9)" 
        icon={<Icon name="md-search" style={styles.actionButtonIcon} />}
        onPress={this.props.onPress}>
      </ActionButton>
    );
  }
}

Search.propTypes = {
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: 'white',
  },
});