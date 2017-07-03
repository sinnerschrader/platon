import React from 'react';
import {View} from 'react-primitives';
import {Text} from './text';

const gridStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const Texts = props => {
  const {tokens = []} = props;
  return (
    <View name={Texts.displayName} style={gridStyle}>
      {tokens.map(text => {
        const {value = {}} = text;
        return (
          <Text
            key={JSON.stringify(text)}
            size={props.size}
            margin={props.gutter}
            name={text.name}
            description={text.description}
            fontFamily={value.fontFamily}
            fontSize={value.fontSize}
            lineHeight={value.lineHeight}
            color={value.color}
            textTransform={value.textTransform}
            textAlign={value.textAlign}
            letterSpacing={value.letterSpacing}
            />
        );
      })}
    </View>
  );
};

Texts.displayName = 'Texts';
