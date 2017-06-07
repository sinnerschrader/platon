import React from 'react';
import {View, Text} from 'react-primitives';

export const Artboard = global.document
  ? props => (
    <View>
      {
        props.name &&
          <Text>{props.name}</Text>
      }
      <View style={props.style}>
        {props.children}
      </View>
    </View>
  )
  : require('react-sketchapp').Artboard;
