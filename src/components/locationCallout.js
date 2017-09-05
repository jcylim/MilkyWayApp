import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const MapCallout = (props) => {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', fontSize: 15}}>{props.title}</Text>
          <Text style={{color: 'white', fontSize: 10}}>{props.description}</Text>
        </View>
    </View>
  );
};

MapCallout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
