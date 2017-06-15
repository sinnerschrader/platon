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
        const width = horizontal && fraction > 1 ? Math.ceil(fraction) * props.step : props.size;
        const height = !horizontal && fraction > 1 ? Math.ceil(fraction) * props.step : props.size;

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
            width={width}
            height={height}
            margin={props.gutter}
            name={vector.vectorName}
            />
        );
      })}
    </View>
  );
};

VectorTiles.displayName = 'Vector Tiles';
