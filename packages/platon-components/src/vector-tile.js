import React from 'react';
import {Text, View} from 'react-primitives';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

export const VectorTile = props => {
  return (
    <View
      name={`${VectorTile.displayName} "${props.name}"`}
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
        name={'Tile Stage'}
        style={{
          display: 'flex',
          height: 230, // WIP calculate height
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          paddingBottom: 20
        }}
        >
        <View
          name={'Tile Stage Content'}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column-reverse'
          }}
          >
          <View
            name={'Vector'}
            style={{
              width: 150,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
            >
            <View
              name={'Vector Space'}
              style={{
                backgroundColor: '#999',
                width: 150,
                height: props.distanceValue, // Insert value of distance
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                borderStyle: 'solid'
              }}
              />
            <View
              name={'Vector Disrection'}
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
                {'⤓ ' + props.distanceName}
              </Text>
            </View>
          </View>
          <View
            name={'Element Container'}
            style={{
              padding: 0,
              position: 'relative',
              zIndex: 2
            }}
            >
            <View
              name={'Element'}
              style={{
                backgroundColor: '#fff',
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                width: 150,
                height: 50,
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowRadius: 5
              }}
              />
            <View
              name={'Element corner'}
              style={{
                backgroundColor: '#fff',
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                width: 5,
                height: 5,
                position: 'absolute',
                top: -2,
                left: -2
              }}
              />
            <View
              name={'Element corner'}
              style={{
                backgroundColor: '#fff',
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                width: 5,
                height: 5,
                position: 'absolute',
                top: -2,
                right: -2
              }}
              />
            <View
              name={'Element corner'}
              style={{
                backgroundColor: '#fff',
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                width: 5,
                height: 5,
                position: 'absolute',
                bottom: -2,
                right: -2
              }}
              />
            <View
              name={'Element corner'}
              style={{
                backgroundColor: '#fff',
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 1,
                width: 5,
                height: 5,
                position: 'absolute',
                bottom: -2,
                left: -2
              }}
              />
          </View>
        </View>
      </View>
      <View
        style={descriptionStyles}
        >
        <Text style={headlineStyles}>
          {props.vectorName}
        </Text>
        <Text style={sublineStyles}>
          {props.vectorValue}
        </Text>
      </View>
    </View>
  );
};

VectorTile.displayName = 'Vector Tile';
