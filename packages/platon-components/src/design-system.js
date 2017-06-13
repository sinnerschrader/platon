import React from 'react';
import {View, Text} from 'react-primitives';
import {Artboard, FontTiles, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';

const COLOR_TILES_IN_ROW = 3;
const ARTBOARD_PADDING = 20;

const artboardStyle = {
  width: ((COLOR_TILE_SIZE + (COLOR_TILE_MARGIN * 2)) * COLOR_TILES_IN_ROW) + (ARTBOARD_PADDING * 2),
  padding: ARTBOARD_PADDING
};

export const DesignSystem = props => (
  <View>
    {props.colorTiles &&
      <Artboard
        name={props.colorTiles.name}
        style={artboardStyle}
        >
        <ColorTiles colors={props.colorTiles.colors}/>
      </Artboard>
    }
    {props.fontTiles &&
      <Artboard
        name={props.fontTiles.name}
        style={artboardStyle}
        >
        <FontTiles fonts={props.fontTiles.fonts}/>
      </Artboard>
    }
    {
      props.distances &&
        <Artboard
          name={props.distances.name}
          style={artboardStyle}
          >
          <Distances distances={props.distances.distances}/>
        </Artboard>
    }
  </View>
);

function Distances(props) {
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
                  <Text>
                    Variable {d.variable}
                  </Text>
              }
              {
                Array.isArray(d.value) && d.value.length > 1 &&
                  <BarGraph
                    values={d.value.map(v => ({
                      label: `${d.variable}@${v.condition}`,
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
          <Text>
            Overview
          </Text>
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

function BarGraph(props) {
  const labels = props.values.map(val => val.label);
  const values = flatten(props.values.map(val => val.value));
  const max = values.sort((a, b) => b - a)[0];

  return (
    <View>
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
                alignItems: 'center',
                minWidth: 50
              }}
              >
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 12,
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

function Bar(props) {
  const segments = (Array.isArray(props.value) ? props.value : [props.value]);
  const offsets = [];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.background
      }}
      >
      {
        segments.map((segment, i) => {
          const prev = typeof segments[i - 1] === 'undefined' ? 0 : segments[i - 1].value;
          const delta = segment.value - prev;
          const offset = segments.slice(0, i)
            .reduce((m, o) => m + o, 0);

          offsets.push(Math.max(15 - delta, 0));

          return (
            <View key={`${segment.value}-value-${i}`}>
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

function flatten(arr, seed = []) {
  if (Array.isArray(arr)) {
    arr.forEach(i => flatten(i, seed));
  } else {
    seed.push(arr);
  }
  return seed;
}
