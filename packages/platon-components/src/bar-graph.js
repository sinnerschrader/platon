import React from 'react';
import {View, Text} from 'react-primitives';
import {Bar} from './bar';
import {flatten} from './util';

export function BarGraph(props) {
  const labels = props.values.map(val => val.label);
  const values = flatten(props.values.map(val => val.value));
  const max = values.sort((a, b) => b - a)[0];

  return (
    <View name={BarGraph.displayName}>
      <View
        name="bargraph-canvas"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: max + (max / 2),
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          paddingTop: 50,
          paddingRight: 50,
          paddingLeft: 50
        }}
        >
        {
          props.values.map(value => (
            <Bar
              key={value.label}
              value={value.value}
              background={value.background}
              />
          ))
        }
      </View>
      <View
        name="bargraph-axis"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 50,
          paddingRight: 50
        }}
        >
        {
          labels.map(label => (
            <View
              key={label}
              name="bargraph-labels"
              style={{
                padding: 3,
                width: 90,
                alignItems: 'center'
              }}
              >
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 11,
                  paddingTop: 5
                }}
                >
                {label}
              </Text>
            </View>
          ))
        }
      </View>
    </View>
  );
}

BarGraph.displayName = 'BarGraph';
