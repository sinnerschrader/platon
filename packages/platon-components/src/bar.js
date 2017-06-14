import React from 'react';
import {View, Text} from 'react-primitives';

export function Bar(props) {
  const segments = (Array.isArray(props.value) ? props.value : [props.value]);
  const offsets = [];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.background,
        marginLeft: 20,
        marginRight: 20
      }}
      >
      {
        segments.map((segment, i) => {
          const index = String(i);
          const prev = typeof segments[i - 1] === 'undefined' ? 0 : segments[i - 1].value;
          const delta = segment.value - prev;
          const offset = segments.slice(0, i)
            .reduce((m, o) => m + o, 0);

          offsets.push(Math.max(15 - delta, 0));

          return (
            <View key={`${segment.value}-value-${index}`}>
              <View
                name="bar"
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: props.width,
                  height: delta,
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 0,
                  borderLeftWidth: 1,
                  borderColor: '#000',
                  borderStyle: 'solid',
                  backgroundColor: segment.background
                }}
                >
                {delta >= 20 &&
                  <View
                    style={{
                      backgroundColor: '#000',
                      paddingTop: 2,
                      paddingRight: 4,
                      paddingBottom: 2,
                      paddingLeft: 4
                    }}
                    >
                    <Text
                      style={{
                        fontSize: 11,
                        lineHeight: 11,
                        color: '#fff'
                      }}
                      >
                      {String(segment.value)}
                    </Text>
                  </View>
              }
              </View>
              {
                delta < 20 &&
                  <View
                    style={{
                      position: 'absolute',
                      bottom: offset,
                      left: 53,
                      backgroundColor: '#000',
                      paddingTop: 2,
                      paddingRight: 4,
                      paddingBottom: 2,
                      paddingLeft: 4
                    }}
                    >
                    <Text
                      style={{
                        fontSize: 11,
                        lineHeight: 11,
                        color: '#fff'
                      }}
                      >
                      {String(segment.value)}
                    </Text>
                  </View>
              }
            </View>
          );
        })
      }

    </View>
  );
}

Bar.defaultProps = {
  width: 50
};
