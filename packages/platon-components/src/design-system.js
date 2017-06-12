import React from 'react';
<<<<<<< HEAD
import {View} from 'react-primitives';
import {Artboard} from './artboard';
import {ColorTiles} from './color-tiles';
import {Distances} from './distances';
import {FontTiles} from './font-tiles';
=======
import {View, Text} from 'react-primitives';
import {Artboard, FontTiles, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';
>>>>>>> WIP Distance Tile

const TILE_SIZE = 300;
const TILE_MARGIN = 10;
const TILES_IN_A_ROW = 3;
const ARTBOARD_PADDING = 20;

const artboardStyle = {
  padding: ARTBOARD_PADDING
};

const tiledArtboardStyle = {
  width: ((TILE_SIZE + (TILE_MARGIN * 2)) * TILES_IN_A_ROW) + (ARTBOARD_PADDING * 2)
};

export const DesignSystem = props => (
  <View>
    {props.colorTiles &&
      <Artboard
        name={props.colorTiles.name}
        style={[artboardStyle, tiledArtboardStyle]}
        >
        <ColorTiles
          colors={props.colorTiles.colors}
          size={TILE_SIZE}
          gutter={TILE_MARGIN}
          />
      </Artboard>
    }
    {props.fontTiles &&
      <Artboard
        name={props.fontTiles.name}
        style={[artboardStyle, tiledArtboardStyle]}
        >
        <FontTiles
          fonts={props.fontTiles.fonts}
          size={TILE_SIZE}
          gutter={TILE_MARGIN}
          />
      </Artboard>
    }
    {
      props.distances &&
        <Artboard
          name={props.distances.name}
          style={artboardStyle}
          >
          <Distances
            distances={props.distances.distances}
            />
        </Artboard>
    }
      <Artboard
        name={'Vector'}
        style={artboardStyle}
        >
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
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingTop: 20,
              paddingBottom: 20
            }}
            >
            <View
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
              style={{
                width: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              >
              <View
                style={{
                  backgroundColor: '#999',
                  width: 150,
                  height: 50, // Insert value of distance
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: '#000',
                  borderStyle: 'solid'
                }}
                />
              <View
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
                  ⤓ M {/* Insert distance name */}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={descriptionStyles}
            >
            <Text style={headlineStyles}>
              {'outside Margin M'}
            </Text>
            <Text style={sublineStyles}>
              {'outside margin M'}
            </Text>
          </View>
        </View>
      </Artboard>
  </View>
);
