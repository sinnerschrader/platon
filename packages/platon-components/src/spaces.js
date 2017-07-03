import React from 'react';
import {Space} from './space';
import {Tiles} from './tiles';

export const Spaces = props => {
  const {tokens = []} = props;
  return (
    <Tiles name={Spaces.displayName}>
      {tokens.map(token => {
        const {value = {}} = token;
        return (
          <Space
            key={JSON.stringify(token)}
            size={props.size}
            margin={props.gutter}
            direction={value.direction}
            name={token.name}
            description={token.description}
            top={value.top}
            right={value.right}
            bottom={value.bottom}
            left={value.left}
            />
        );
      })}
    </Tiles>
  );
};

Spaces.displayName = 'Spaces';
