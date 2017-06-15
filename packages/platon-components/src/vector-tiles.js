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
      {props.vectors.map(vector => {
        const fraction = (vector.distanceValue + 50) / props.step;
        const horizontal = (vector.vectorOrigin === 'left' || vector.vectorOrigin === 'right');

        return (
          <VectorTile
            key={JSON.stringify(vector)}
            distanceValue={vector.distanceValue}
            distanceName={vector.distanceName}
            vectorValue={vector.vectoralue}
            vectorName={vector.vectorName}
            vectorOrigin={vector.vectorOrigin}
            vectorDirection={vector.vectorDirection}
            size={props.size}
            margin={props.gutter}
            name={vector.vectorName}
            style={horizontal && fraction > 1 && {
              width: Math.ceil(fraction) * props.step
            }}
            />
        );
      })}
    </View>
  );
};

VectorTiles.displayName = 'Vector Tiles';
