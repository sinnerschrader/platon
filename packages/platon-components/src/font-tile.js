import React from 'react';
import {Text, View} from 'react-primitives';
import {COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

export const FontTile = props => {
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        display: 'flex',
        flexDirection: 'column',
        height: COLOR_TILE_SIZE,
        justifyContent: 'space-between',
        margin: COLOR_TILE_MARGIN,
        width: COLOR_TILE_SIZE
      }}
      >
      <View
        style={[
          descriptionStyles,
          {backgroundColor: '#f2f2f2'}
        ]}
        >
        <Text
          style={{
            fontSize: props.fontSize || 30,
            lineHeight: props.lineHeight || 40,
            fontFamily: props.family
          }}
          >
          „Sch&ouml;nheit bietet eine natürliche Überlegenheit.”
        </Text>
      </View>
      <View style={descriptionStyles}>
        <Text style={headlineStyles}>
          {props.name}
        </Text>
        <Text style={sublineStyles}>
          {props.weight}
        </Text>
      </View>
    </View>
  );
};
