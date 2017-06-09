import React from 'react';
import {View, Text} from 'react-primitives';

const labelStyle = {
  color: '#929292',
  fontSize: '1.4vw',
  lineHeight: '2.4vw',
  padding: 3
};

export const Artboard = global.document ? props => (
  <View>
    {
      props.name &&
        <Text style={labelStyle}>{props.name}</Text>
    }
    <View style={[{backgroundColor: '#fff'}, props.style]}>
      {props.children}
    </View>
  </View>
  ) :
  require('react-sketchapp').Artboard;

Artboard.displayName = 'Artboard';
