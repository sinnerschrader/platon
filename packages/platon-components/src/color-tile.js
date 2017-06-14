import React from 'react';
import {Text, View} from 'react-primitives';

const containerStyles = {
  flexDirection: 'column',
  justifyContent: 'flex-end'
};

export const descriptionStyles = {
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  backgroundColor: '#fff'
};

export const headlineStyles = {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 30
};

export const sublineStyles = {
  fontSize: 14,
  lineHeight: 20
};

export const ColorTile = props => (
  <View
    name={`Color Tile "${props.name}"`}
    style={[
      containerStyles,
      {
        backgroundColor: props.hex,
        position: 'relative',
        height: props.size,
        width: props.size,
        margin: props.margin
      }
    ]}
    >
    <View name="Color Description" style={descriptionStyles}>
      <Text name="Color Name" style={headlineStyles}>
        {props.name}
      </Text>
      <Text name="Color Hex" style={sublineStyles}>
        {props.hex}
      </Text>
    </View>
  </View>
);

ColorTile.displayName = 'ColorTile';
