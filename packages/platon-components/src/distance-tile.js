import React from 'react';
import {Tile} from './tile';

export function DistanceTile(props) {
  return (
    <Tile
      name="DistanceTile"
      headline={props.headline}
      subline={props.subline}
      size={props.size}
      margin={props.margin}
      >
      {props.children}
    </Tile>
  );
}

DistanceTile.displayName = 'DistanceTile';
