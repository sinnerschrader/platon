import React from 'react';
import {Text, View} from 'react-primitives';

export function Label(props) {
  const arrow = getArrow(props.origin, props.invert);
  return (
    <View
      name={`Label ${props.children}`}
      style={{
        backgroundColor: '#222',
        width: 50
      }}
      >
      <Text
        style={{
          fontSize: 12,
          lineHeight: 16,
          color: '#fff',
          textAlign: 'center',
          paddingTop: 5,
          paddingBottom: 5
        }}
        >
        {`${arrow} ${props.children}`}
      </Text>
    </View>
  );
}

Label.displayName = 'Label';

function getArrow(origin, invert = false) {
  switch (origin) {
    case 'top':
      return invert ? '⤓' : '⤒';
    case 'right':
      return invert ? '⇤' : '⇥';
    case 'left':
      return invert ? '⇥' : '⇤';
    case 'bottom':
    default:
      return invert ? '⤒' : '⤓';
  }
}
