import React from 'react';
import {View} from 'react-primitives';
import {Artboard} from './artboard';
import {ColorTiles} from './color-tiles';
import {Distances} from './distances';
import {FontTiles} from './font-tiles';

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
  </View>
);
