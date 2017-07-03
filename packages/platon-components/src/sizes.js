import React from 'react';
import {Tiles} from './tiles';
import {Size} from './size';

export function Sizes(props) {
  const {tokens = []} = props;
  return (
    <Tiles name="Sizes">
      {
        tokens.map(token => (
          <Size
            key={JSON.stringify(token)}
            name={token.name}
            description={token.description}
            margin={props.gutter}
            size={props.size}
            value={token.value}
            />
        ))
      }
    </Tiles>
  );
}

Sizes.displayName = 'Sizes';
