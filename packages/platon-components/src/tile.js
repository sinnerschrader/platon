import React from 'react';
import {View, Text} from 'react-primitives';

const tileStyles = {
  position: 'relative',
  display: 'flex'
};

const stageStyles = {
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f2f2f2'
};

const descriptionStyles = {
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  backgroundColor: '#fff'
};

const headlineStyles = {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 30
};

const sublineStyles = {
  fontSize: 14,
  lineHeight: 20
};

export function Tile(props) {
  const height = typeof props.height === 'number' ? props.height : props.size;
  const width = typeof props.width === 'number' ? props.width : props.size;

  const descriptionHeight = [
    props.headline ? 30 : 0,
    props.subline ? 20 : 0
  ].reduce((m, i) => m + i, 0);

  const stageHeight = height - descriptionHeight;

  return (
    <View
      name={props.name}
      style={[
        tileStyles,
        {
          width: width,
          height: height,
          margin: props.margin
        }
      ]}
      >
      <View
        name="Tile Stage"
        style={[
          stageStyles,
          {
            height: stageHeight,
            width: width
          }
        ]}
        >
        {props.children}
      </View>
      <View
        name="Tile Description"
        style={descriptionStyles}
        >
        <Text style={headlineStyles}>
          {props.headline}
        </Text>
        <Text style={sublineStyles}>
          {props.subline}
        </Text>
      </View>
    </View>
  );
}

Tile.displayName = 'Tile';
