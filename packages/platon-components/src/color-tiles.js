import React from 'react';
import {View} from 'react-primitives';
import {ColorTile} from './color-tile';

const colorTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const ColorTiles = props => {
  return (
    <View style={colorTileStyle}>
      {props.colors.map(c => (
        <ColorTile
          key={c.name}
          name={c.name}
          hex={c.hex}
          />
        )
      )}
    </View>
  );
};
