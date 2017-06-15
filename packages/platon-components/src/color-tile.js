import React from 'react';
import {View} from 'react-primitives';
import {Tile} from './tile';

export const ColorTile = props => (
  <Tile
    name={`Color Tile "${props.name}"`}
    headline={props.name}
    subline={props.hex}
    size={props.size}
    margin={props.margin}
    >
    <Color
      hex={props.hex}
      size={props.size}
      />
  </Tile>
);

ColorTile.displayName = 'ColorTile';

function Color(props) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: props.size,
        height: props.size,
        backgroundColor: props.hex
      }}
      />
  );
}
