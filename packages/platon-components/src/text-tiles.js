import React from 'react';
import {View} from 'react-primitives';
import {TextTile} from './text-tile';

const gridStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export const TextTiles = props => {
  return (
    <View name={TextTiles.displayName} style={gridStyle}>
      {props.texts.map(text => (
        <TextTile
          key={JSON.stringify(text)}
          size={props.size}
          margin={props.gutter}
          name={text.name}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          lineHeight={text.lineHeight}
          color={text.color}
          textTransform={text.textTransform}
          textAlign={text.textAlign}
          letterSpacing={text.letterSpacing}
          />
        )
      )}
    </View>
  );
};

TextTiles.displayName = 'Text Tiles';
