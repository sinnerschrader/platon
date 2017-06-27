import React from 'react';
import {Tiles} from './tiles';
import {VectorTile} from './vector-tile';

export const VectorTiles = props => {
  return (
    <Tiles name={VectorTiles.displayName}>
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
    </Tiles>
  );
};

VectorTiles.displayName = 'Vector Tiles';
