import React from 'react';
import {Tiles} from './tiles';
import {ColorTile} from './color-tile';

export const ColorTiles = props => {
  return (
    <Tiles name={ColorTiles.displayName}>
      {props.colors.map(c => (
        <ColorTile
          key={c.name}
          name={c.name}
          hex={c.hex}
          size={props.size}
          margin={props.gutter}
          />
        )
      )}
    </Tiles>
  );
};

ColorTiles.displayName = 'ColorTiles';
