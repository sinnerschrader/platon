import React from 'react';
import {View} from 'react-primitives';
import {FontTile} from './font-tile';

const FontTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const FontTiles = (props) => {
  return (
    <View style={FontTileStyle}>
      {props.fonts.map(font => (
        <FontTile
          name={font.name}
          weight={font.weight}
          family={font.family}
          key={font.family}
          />
        )
      )}
    </View>
  );
};
