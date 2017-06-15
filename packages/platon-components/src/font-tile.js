import React from 'react';
import {Text} from 'react-primitives';
import {Tile} from './tile';

export const FontTile = props => {
  return (
    <Tile
      size={props.size}
      margin={props.margin}
      headline={props.name}
      subline={props.weight}
      name={`${FontTile.displayName} "${props.name}"`}
      >
      <Font
        size={props.fontSize}
        lineHeight={props.lineHeight}
        family={props.family}
        />
    </Tile>
  );
};

FontTile.displayName = 'Font Tile';

function Font(props) {
  return (
    <Text
      style={{
        fontSize: props.size || 30,
        lineHeight: props.lineHeight || 40,
        fontFamily: props.family
      }}
      >
      „Sch&ouml;nheit bietet eine natürliche Überlegenheit.”
    </Text>
  );
}
