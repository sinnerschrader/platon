import React from 'react';
import {Text, View} from 'react-primitives';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

export const FontTile = props => {
  return (
    <View
      name={`${FontTile.displayName} "${props.name}"`}
      style={{
        backgroundColor: '#f2f2f2',
        display: 'flex',
        flexDirection: 'column',
        height: props.size,
        justifyContent: 'space-between',
        margin: props.margin,
        width: props.size
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
      <View name="Font description" style={descriptionStyles}>
        <Text name="Font name" style={headlineStyles}>
          {props.name}
        </Text>
        <Text name="Font weight" style={sublineStyles}>
          {props.weight}
        </Text>
      </View>
    </View>
  );
};

FontTile.displayName = 'Font Tile';
