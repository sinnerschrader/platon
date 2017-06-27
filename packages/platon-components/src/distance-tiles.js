import React from 'react';
import {Tiles} from './tiles';
import {DistanceTile} from './distance-tile';

export function DistanceTiles(props) {
  return (
    <Tiles name="DistanceTiles">
      {
        props.distances.map(d => (
          <DistanceTile
            key={JSON.stringify(d)}
            headline={d.name}
            margin={props.gutter}
            size={props.size}
            values={d.values}
            />
        ))
      }
    </Tiles>
  );
}

DistanceTiles.displayName = 'DistanceTiles';
