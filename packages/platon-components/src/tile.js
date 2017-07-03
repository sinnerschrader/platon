import React from 'react';
import {View, Text} from 'react-primitives';
import redent from 'redent';

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
  lineHeight: 15
};

export function Tile(props) {
  const height = typeof props.height === 'number' ? props.height : props.size;
  const width = typeof props.width === 'number' ? props.width : props.size;
  const description = redent(props.subline || '').split('\n');

  const descriptionHeight = [
    props.headline ? 30 : 0,
    description.length * 20
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
        {description.map((d, i) => <Text key={String(i)} style={sublineStyles}>{d}</Text>)}
      </View>
    </View>
  );
}

Tile.displayName = 'Tile';
