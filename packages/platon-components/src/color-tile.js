import React from 'react';
import { Text, View } from 'react-primitives';

export const COLOR_TILE_SIZE = 300;
export const COLOR_TILE_MARGIN = 10;

const containerStyles = {
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: COLOR_TILE_SIZE,
  width: COLOR_TILE_SIZE,
  margin: COLOR_TILE_MARGIN,
};

const descriptionStyles = {
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  backgroundColor: '#fff'
};

const headlineStyles = {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 30,
};

const sublineStyles = {
  fontSize: 14,
  lineHeight: 20,
};

export const ColorTile = ({ name, hex }) => (
  <View
    name={`Color Tile "${name}"`}
    style={[containerStyles, {backgroundColor: hex}]}
  >
   <View style={descriptionStyles}>
      <Text name="Color Name" style={headlineStyles}>
        {name}
      </Text>
      <Text name="Color Hex" style={sublineStyles}>
        {hex}
      </Text>
   </View>
  </View>
);

ColorTile.displayName = 'ColorTile';
