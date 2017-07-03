import React from 'react';
import {Tiles} from './tiles';
import {Font} from './font';

export const Fonts = props => {
  const {tokens = []} = props;
  return (
    <Tiles name={Fonts.displayName}>
      {tokens.map(token => {
        return (
          <Font
            key={JSON.stringify(token)}
            family={token.value}
            name={token.name}
            description={token.description}
            size={props.size}
            margin={props.gutter}
            />
        );
      }
      )}
    </Tiles>
  );
};

Fonts.displayName = 'Fonts';
