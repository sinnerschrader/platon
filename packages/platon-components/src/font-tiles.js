import React from 'react';
import {View} from 'react-primitives';
import {FontTile} from './font-tile';

const FontTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const FontTiles = props => {
  return (
    <View style={FontTileStyle}>
      {props.fonts.map(font => (
        <FontTile
          key={font.family}
          family={font.family}
          name={font.name}
          fontSize={font.fontSize}
          lineHeight={font.lineHeight}
          weight={font.weight}
          />
        )
      )}
    </View>
  );
};
