import React from 'react';
import {Tiles} from './tiles';
import {Color} from './color';

export const Colors = props => {
  const {tokens = []} = props;
  return (
    <Tiles name={Colors.displayName}>
      {tokens.map(token => (
        <Color
          key={JSON.stringify(token)}
          name={token.name}
          description={token.description}
          hex={token.value}
          size={props.size}
          margin={props.gutter}
          />
        )
      )}
    </Tiles>
  );
};

Colors.displayName = 'Colors';
