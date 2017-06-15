import React from 'react';
import {View, Text} from 'react-primitives';
import {Artboard} from './artboard';
import {ColorTiles} from './color-tiles';
import {DistanceTiles} from './distance-tiles';
import {FontTiles} from './font-tiles';
import {VectorTiles} from './vector-tiles';
import {descriptionStyles, sublineStyles, headlineStyles} from './color-tile';

const TILE_SIZE = 300;
const TILE_MARGIN = 10;
const TILES_IN_A_ROW = 4;
const ARTBOARD_PADDING = 20;

const TILE_WIDTH = TILE_SIZE + (TILE_MARGIN * 2);
const LINE_WIDTH = TILE_WIDTH * TILES_IN_A_ROW;
const ARTBOARD_WIDTH = LINE_WIDTH + (ARTBOARD_PADDING * 2);

const artboardStyle = {
  padding: ARTBOARD_PADDING
};

const tiledArtboardStyle = {
  width: ARTBOARD_WIDTH
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
      props.distanceTiles &&
        <Artboard
          name={props.distanceTiles.name}
          style={[artboardStyle, tiledArtboardStyle]}
          >
          <DistanceTiles
            distances={props.distanceTiles.distances}
            size={TILE_SIZE}
            gutter={TILE_MARGIN}
            />
        </Artboard>
    }
    {props.vectorTiles &&
      <Artboard
        name={props.vectorTiles.name}
        style={[artboardStyle, tiledArtboardStyle]}
        >
        <VectorTiles
          vectors={props.vectorTiles.vectors}
          size={TILE_SIZE}
          gutter={TILE_MARGIN}
          step={TILE_SIZE + TILE_MARGIN}
          />
      </Artboard>
    }
    {
      <Artboard
        name="Text Styles"
        style={[artboardStyle]}
        >
        <View
          name="Tile"
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
          >
          <View
            name="Description Container"
            style={[
              descriptionStyles,
              {
                width: 200
              }
            ]}
            >
            <Text
              style={[
                headlineStyles,
                {
                  marginBottom: 20
                }
              ]}
              >
              Headline 1
            </Text>
            <KeyValue
              name="font-family"
              value="Maison bold"
              valueKey="font-family"
              />
            <KeyValue
              name="font-size"
              value={90}
              valueKey="font-size"
              />
            <KeyValue
              name="line-height"
              value={90}
              valueKey="line-height"
              />
            <KeyValue
              name="font-color"
              value="#000000"
              valueKey="font-color"
              />
            <KeyValue
              name="text-transform"
              value="none"
              valueKey="text-transform"
              />
            <KeyValue
              name="text-align"
              value="left"
              valueKey="text-align"
              />
            <KeyValue
              name="letter-spacing"
              value={1.41}
              valueKey="letter-spacing"
              />
          </View>
          <View
            name="Stage Container"
            style={{
              backgroundColor: '#f2f2f2',
              paddingTop: 20,
              paddingRight: 20,
              paddingBottom: 40,
              paddingLeft: 20,
              width: 600
            }}
            >
            <Text
              style={{
                fontFamily: 'Maison-Bold',
                fontSize: 90,
                lineHeight: 90,
                color: '#000000',
                textTransform: 'none',
                textAlign: 'left',
                letterSpacing: 1.41
              }}
              >
              Die Philosophie bietet mir einen Hafen, während ich andere mit den Stürmen kämpfen sehe.
            </Text>
          </View>
        </View>
      </Artboard>
    }
  </View>
);

DesignSystem.displayName = 'DesignSystem';

function KeyValue(props) {
  console.log(props);
  return (
    <View
      name={props.name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 10
      }}
      >
      <Text
        style={[
          sublineStyles,
          {
            paddingRight: 20
          }
        ]}
        >
        {props.valueKey}
      </Text>
      <Text
        style={[
          sublineStyles,
          {
            fontWeight: 'bold'
          }
        ]}
        >
        {String(props.value)}
      </Text>
    </View>
  );
}
