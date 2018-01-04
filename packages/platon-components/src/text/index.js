import React from 'react';
import {Text as T, View} from 'react-primitives';
import {Tile} from './tile';
import {getName, getValue} from './util';

const tableStyle = {
  marginTop: 50,
  paddingTop: 10,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  borderTopColor: '#000'
};

export function Text(props) {
  const fontSize = getValue(props.fontSize) || 12;
  const factor = Math.min(Math.max(1, Math.ceil(fontSize / 30)), 4);
  const size = (getValue(props.size) || 0) * factor;
  const pairSize = Math.min(size / 2.5, 300);

  return (
    <Tile
      headline={props.name}
      subline={props.description}
      width={size}
      margin={props.margin}
      >
      <T
        style={{
          fontFamily: getValue(props.fontFamily),
          fontSize: fontSize,
          lineHeight: getValue(props.lineHeight),
          color: getValue(props.color),
          textTransform: getValue(props.textTransform),
          textAlign: props.textAlign,
          letterSpacing: getValue(props.letterSpacing)
        }}
        >
        Die Philosophie bietet mir einen Hafen,
        während ich andere mit den Stürmen kämpfen sehe.
      </T>
      <View style={[tableStyle, {width: size - 40}]}>
        <Pair
          label="font-family"
          value={props.fontFamily}
          width={pairSize}
          />
        <Pair
          label="font-size"
          value={props.fontSize}
          width={pairSize}
          />
        <Pair
          label="line-height"
          value={props.lineHeight}
          width={pairSize}
          />
        <Pair
          label="color"
          value={props.color}
          width={pairSize}
          />
        <Pair
          label="text-transform"
          value={props.textTransform}
          width={pairSize}
          />
        <Pair
          label="text-align"
          value={props.textAlign}
          width={pairSize}
          />
        <Pair
          label="letter-spacing"
          value={props.letterSpacing}
          width={size / 2}
          />
      </View>
    </Tile>
  );
}

Text.defaultProps = {
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
  if (typeof props.value === 'undefined' || props.value === null) {
    return null;
  }

  const value = getName(props.value) || getValue(props.value);

  return (
    <View style={[pairStyles, {width: props.width}]}>
      <View>
        <T>{String(props.label)}</T>
      </View>
      <View>
        <T style={{fontWeight: 'bold'}}>
          {String(value)}
        </T>
      </View>
    </View>
  );
}
