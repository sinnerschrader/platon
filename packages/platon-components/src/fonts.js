import React from 'react';
import {Tiles} from './tiles';
import {Font} from './font';

export const Fonts = props => {
  const {tokens = []} = props;
  return (
    <Tiles name={Fonts.displayName}>
      {tokens.map(font => {
        const {value = {}} = font;
        return (
          <Font
            key={JSON.stringify(font)}
            family={value.family}
            name={font.name}
            description={font.description}
            size={props.size}
            margin={props.gutter}
            fontSize={value.fontSize}
            lineHeight={value.lineHeight}
            weight={value.weight}
            />
        );
      }
      )}
    </Tiles>
  );
};

Fonts.displayName = 'Fonts';
