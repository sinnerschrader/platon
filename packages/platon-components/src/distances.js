import React from 'react';
import {View, Text} from 'react-primitives';
import {BarGraph} from './bar-graph';

export function Distances(props) {
  return (
    <View>
      {
        props.distances.map(d => {
          return (
            <View
              key={d.variable}
              >
              {
                Array.isArray(d.value) && d.value.length > 1 &&
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 13
                    }}
                    >
                    {d.variable}
                  </Text>
              }
              {
                Array.isArray(d.value) && d.value.length > 1 &&
                  <BarGraph
                    values={d.value.map(v => ({
                      label: v.condition,
                      value: [{
                        value: v.value,
                        background: v.background
                      }]
                    }))}
                    />
              }
            </View>
          );
        })
      }
      {
        <View>
          <BarGraph
            values={props.distances.map(d => ({
              label: d.variable,
              value: (Array.isArray(d.value) ? d.value : [d.value])
                .map(v => ({
                  value: v.value,
                  background: v.background
                }))
            }))}
            />
        </View>
      }
    </View>
  );
}
