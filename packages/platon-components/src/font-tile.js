import React from 'react';
import {Text, View} from 'react-primitives';
import {COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

export const FontTile = (props) => {
  return (
    <View style={[{
      height: COLOR_TILE_SIZE,
      width: COLOR_TILE_SIZE,
      margin: COLOR_TILE_MARGIN,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }, {backgroundColor: '#f2f2f2'}]}>
      <View style={[
        descriptionStyles,
        {backgroundColor: '#f2f2f2'}
      ]}>
        <Text style={{
          fontSize: 30,
          lineHeight: 40,
          fontFamily: props.family
          }}>
          "Schönheit bietet eine natürliche Überlegenheit."
        </Text>
      </View>
      <View style={[descriptionStyles, {}]}>
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
