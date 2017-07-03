import React from 'react';
import {Tiles} from './tiles';
import {Vector} from './vector';

export const Vectors = props => {
  const {tokens = []} = props;
  return (
    <Tiles name={Vectors.displayName}>
      {tokens.map(token => {
        const {value = {}} = token;
        const fraction = (value.length + 50) / props.step;
        const horizontal = (value.origin === 'left' || value.origin === 'right');
        const width = horizontal && fraction > 1 ? Math.ceil(fraction) * props.step : props.size;
        const height = !horizontal && fraction > 1 ? Math.ceil(fraction) * props.step : props.size;
        return (
          <Vector
            key={JSON.stringify(token)}
            length={value.length}
            lengthName={value.lengthName}
            origin={value.origin}
            direction={value.direction}
            size={props.size}
            width={width}
            height={height}
            margin={props.gutter}
            name={token.name}
            description={token.description}
            />
        );
      })}
    </Tiles>
  );
};

Vectors.displayName = 'Vectors';
