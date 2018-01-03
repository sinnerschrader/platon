import React from 'react';
import {View} from 'react-primitives';
import {Tile} from './tile';

export const Color = props => (
  <Tile
    name={`Color "${props.name}"`}
    headline={props.name}
    subline={props.description}
    size={props.size}
    margin={props.margin}
    >
    <ColorSwatch
      hex={props.hex}
      size={props.size}
      />
  </Tile>
);

Color.displayName = 'Color';

function ColorSwatch(props) {
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
