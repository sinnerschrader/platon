import React from 'react';
import {View} from 'react-primitives';
import {Artboard} from './artboard';
import {ColorTiles} from './color-tiles';
import {DistanceTiles} from './distance-tiles';
import {FontTiles} from './font-tiles';
import {VectorTiles} from './vector-tiles';

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
  </View>
);

DesignSystem.displayName = 'DesignSystem';
