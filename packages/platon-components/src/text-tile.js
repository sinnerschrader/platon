import React from 'react';
import {Text, View} from 'react-primitives';
import {Tile} from './tile';

const tableStyle = {
  marginTop: 50,
  paddingTop: 10,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  borderTopColor: '#000'
};

export function TextTile(props) {
  const fontSize = props.fontSize || 12;
  const factor = Math.min(Math.max(1, Math.ceil(fontSize / 30)), 4);
  const size = props.size * factor;
  const pairSize = Math.min(size / 2.5, 300);

  return (
    <Tile
      headline={props.name}
      width={props.size * factor}
      margin={props.margin}
      >
      <Text
        style={{
          fontFamily: props.fontFamily,
          fontSize: fontSize,
          lineHeight: props.lineHeight,
          color: props.color,
          textTransform: props.textTransform,
          textAlign: props.textAlign,
          letterSpacing: props.letterSpacing
        }}
        >
        Die Philosophie bietet mir einen Hafen,
        während ich andere mit den Stürmen kämpfen sehe.
      </Text>
      <View style={[tableStyle, {width: size - 40}]}>
        {
          typeof props.fontFamily === 'string' &&
            <Pair
              label="font-family"
              value={props.fontFamily}
              width={pairSize}
              />
        }
        {
          typeof props.fontSize === 'number' &&
            <Pair
              label="font-size"
              value={props.fontSize}
              width={pairSize}
              />
        }
        {
          typeof props.lineHeight === 'number' &&
            <Pair
              label="line-height"
              value={props.lineHeight}
              width={pairSize}
              />
        }
        {
          typeof props.color === 'string' &&
            <Pair
              label="color"
              value={props.color}
              width={pairSize}
              />
        }
        {
          typeof props.textTransform === 'string' &&
            <Pair
              label="text-transform"
              value={props.textTransform}
              width={pairSize}
              />
        }
        {
          typeof props.textAlign === 'string' &&
            <Pair
              label="text-align"
              value={props.textAlign}
              width={pairSize}
              />
        }
        {
          typeof props.letterSpacing === 'string' &&
            <Pair
              label="letter-spacing"
              value={props.letterSpacing}
              width={size / 2}
              />
        }
      </View>
    </Tile>
  );
}

TextTile.defaultProps = {
  fontSize: 12,
  color: '#000',
  textAlign: 'left'
};

const pairStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

function Pair(props) {
  return (
    <View style={[pairStyles, {width: props.width}]}>
      <View>
        <Text>
          {String(props.label)}
        </Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>
          {String(props.value)}
        </Text>
      </View>
    </View>
  );
}
