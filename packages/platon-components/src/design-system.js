import React from 'react';
import {View} from 'react-primitives';
import {Artboard} from './artboard';
import {ColorTiles} from './color-tiles';
import {DistanceTiles} from './distance-tiles';
import {FontTiles} from './font-tiles';
import {TextTiles} from './text-tiles';
import {SpaceTiles} from './space-tiles';
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
    {
      props.colorTiles &&
        <Artboard
          name={props.colorTiles.name}
          style={[artboardStyle, tiledArtboardStyle]}
          page={props.page}
          left={getOffset(0, props)}
          >
          <ColorTiles
            colors={props.colorTiles.colors}
            size={TILE_SIZE}
            left={0}
            />
          </Artboard>
    }
    {
      props.fontTiles &&
        <Artboard
          name={props.fontTiles.name}
          style={[artboardStyle, tiledArtboardStyle]}
          page={props.page}
          left={getOffset(1, props)}
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
          page={props.page}
          left={getOffset(2, props)}
          >
          <DistanceTiles
            distances={props.distanceTiles.distances}
            size={TILE_SIZE}
            gutter={TILE_MARGIN}
            />
        </Artboard>
    }
    {
      props.vectorTiles &&
        <Artboard
          name={props.vectorTiles.name}
          style={[artboardStyle, tiledArtboardStyle]}
          page={props.page}
          left={getOffset(3, props)}
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
      props.spaceTiles &&
        <Artboard
          name={props.spaceTiles.name}
          style={[artboardStyle, tiledArtboardStyle]}
          page={props.page}
          left={getOffset(4, props)}
          >
          <SpaceTiles
            spaces={props.spaceTiles.spaces}
            size={TILE_SIZE}
            gutter={TILE_MARGIN}
            step={TILE_SIZE + TILE_MARGIN}
            />
          </Artboard>
    }
    {props.textTiles &&
      <Artboard
        name={props.textTiles.name}
        style={[artboardStyle, tiledArtboardStyle]}
        page={props.page}
        left={getOffset(5, props)}
        >
        <TextTiles
          size={TILE_SIZE}
          texts={props.textTiles.texts}
          gutter={TILE_MARGIN}
          />
      </Artboard>
    }
  </View>
);

DesignSystem.displayName = 'DesignSystem';

function getOffset(index, props) {
  const count = Object.keys(props).slice(0, index).filter(Boolean).length;
  return count * (ARTBOARD_WIDTH + 100);
}
