import React from 'react';
import {View} from 'react-primitives';
import {VectorTile} from './vector-tile';

const VectorTileStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const VectorTiles = props => {
  return (
    <View name={VectorTiles.displayName} style={VectorTileStyle}>
      {props.vectors.map(vector => (
        <VectorTile
          key={vector.distanceValue}
          distanceValue={vector.distanceValue}
          distanceName={vector.distanceName}
          vectorValue={vector.vectorValue}
          vectorName={vector.vectorName}
          size={props.size}
          margin={props.gutter}
          />
        )
      )}
    </View>
  );
};

VectorTiles.displayName = 'Vector Tiles';
