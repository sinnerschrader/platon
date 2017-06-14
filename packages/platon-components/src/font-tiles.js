import React from 'react';
import {View} from 'react-primitives';
import {FontTile} from './font-tile';

const FontTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const FontTiles = props => {
  return (
    <View name={FontTiles.displayName} style={FontTileStyle}>
      {props.fonts.map(font => (
        <FontTile
          key={font.family}
          family={font.family}
          name={font.name}
          size={props.size}
          margin={props.gutter}
          fontSize={font.fontSize}
          lineHeight={font.lineHeight}
          weight={font.weight}
          />
        )
      )}
    </View>
  );
};

FontTiles.displayName = 'Font Tiles';
