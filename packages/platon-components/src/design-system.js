import React from 'react';
import {View} from 'react-primitives';
import {Artboard} from './artboard';
import {Colors} from './colors';
import {Sizes} from './sizes';
import {Fonts} from './fonts';
import {Texts} from './texts';
import {Spaces} from './spaces';
import {Vectors} from './vectors';

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

export function DesignSystem(props) {
  const offsets = [];
  return (
    <View>
      {
        props.colors &&
          <Artboard
            name={props.colors.name}
            style={[artboardStyle, tiledArtboardStyle]}
            page={props.page}
            left={getOffset(props, offsets)}
            >
            <Colors
              tokens={props.colors.tokens}
              size={TILE_SIZE}
              left={0}
              />
            </Artboard>
      }
      {
        props.fonts &&
          <Artboard
            name={props.fonts.name}
            style={[artboardStyle, tiledArtboardStyle]}
            page={props.page}
            left={getOffset(props, offsets)}
            >
            <Fonts
              tokens={props.fonts.tokens}
              size={TILE_SIZE}
              gutter={TILE_MARGIN}
              />
            </Artboard>
      }
      {
        props.sizes &&
          <Artboard
            name={props.sizes.name}
            style={[artboardStyle, tiledArtboardStyle]}
            page={props.page}
            left={getOffset(props, offsets)}
            >
            <Sizes
              tokens={props.sizes.tokens}
              size={TILE_SIZE}
              gutter={TILE_MARGIN}
              />
          </Artboard>
      }
      {
        props.vectors &&
          <Artboard
            name={props.vectors.name}
            style={[artboardStyle, tiledArtboardStyle]}
            page={props.page}
            left={getOffset(props, offsets)}
            >
            <Vectors
              tokens={props.vectors.tokens}
              size={TILE_SIZE}
              gutter={TILE_MARGIN}
              step={TILE_SIZE + TILE_MARGIN}
              />
            </Artboard>
      }
      {
        props.spaces &&
          <Artboard
            name={props.spaces.name}
            style={[artboardStyle, tiledArtboardStyle]}
            page={props.page}
            left={getOffset(props, offsets)}
            >
            <Spaces
              tokens={props.spaces.tokens}
              size={TILE_SIZE}
              gutter={TILE_MARGIN}
              step={TILE_SIZE + TILE_MARGIN}
              />
            </Artboard>
      }
      {props.texts &&
        <Artboard
          name={props.texts.name}
          style={[artboardStyle, tiledArtboardStyle]}
          page={props.page}
          left={getOffset(props, offsets)}
          >
          <Texts
            size={TILE_SIZE}
            tokens={props.texts.tokens}
            gutter={TILE_MARGIN}
            />
        </Artboard>
      }
    </View>
  );
}

DesignSystem.displayName = 'DesignSystem';

function getOffset(props, offsets) {
  const count = Object.keys(props).slice(0, offsets.length).filter(Boolean).length;
  const offset = count * (ARTBOARD_WIDTH + 100);
  offsets.push(offset);
  return offset;
}
