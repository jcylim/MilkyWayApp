import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MapCallout = (props) => {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'space-between'}}>
          <Text style={{color: 'white', fontSize: 20}}>{props.title}</Text>
          <Text style={{color: 'white', fontSize: 20}}>{props.description}</Text>
        </View>
    </View>
  );
};

MapCallout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MapCallout;