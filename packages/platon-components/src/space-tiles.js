import React from 'react';
import {SpaceTile} from './space-tile';
import {Tiles} from './tiles';

export const SpaceTiles = props => {
  return (
    <Tiles name={SpaceTiles.displayName}>
      {props.spaces.map(space => (
        <SpaceTile
          key={JSON.stringify(space)}
          size={props.size}
          margin={props.gutter}
          direction={space.direction}
          name={space.name}
          description={space.description}
          top={space.top}
          right={space.right}
          bottom={space.bottom}
          left={space.left}
          />
      ))}
    </Tiles>
  );
};

SpaceTiles.displayName = 'Vector Tiles';
