import React from 'react';
import {View} from 'react-primitives';
import {ColorTile} from './color-tile';

const colorTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const ColorTiles = (props) => {
  return (
    <View style={colorTileStyle}>
      {props.colors.map(c => <ColorTile name={c.name} hex={c.hex} key={c.name} />)}
    </View>
  );
};
