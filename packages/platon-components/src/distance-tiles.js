import React from 'react';
import {View} from 'react-primitives';
import {DistanceTile} from './distance-tile';

export function DistanceTiles(props) {
  return (
    <View
      name="DistanceTiles"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
      >
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
    </View>
  );
}

DistanceTiles.displayName = 'DistanceTiles';
