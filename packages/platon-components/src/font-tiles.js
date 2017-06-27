import React from 'react';
import {Tiles} from './tiles';
import {FontTile} from './font-tile';

export const FontTiles = props => {
  return (
    <Tiles name={FontTiles.displayName}>
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
    </Tiles>
  );
};

FontTiles.displayName = 'Font Tiles';
