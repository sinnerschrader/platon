import React from 'react';
import {Text} from 'react-primitives';
import {Tile} from './tile';

export const Font = props => {
  return (
    <Tile
      size={props.size}
      margin={props.margin}
      headline={props.name}
      subline={props.description}
      name={`${Font.displayName} "${props.name}"`}
      >
      <FontSwatch
        size={props.fontSize}
        lineHeight={props.lineHeight}
        family={props.family}
        />
    </Tile>
  );
};

Font.displayName = 'Font';

function FontSwatch(props) {
  return (
    <Text
      style={{
        fontSize: props.size || 30,
        lineHeight: props.lineHeight || 40,
        fontFamily: props.family
      }}
      >
      {props.children}
    </Text>
  );
}
