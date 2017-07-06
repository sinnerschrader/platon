import t from 'prop-types';
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

DesignSystem.defaultProps = {
  colors: null,
  fonts: null,
  sizes: null,
  vectors: null,
  spaces: null,
  texts: null
};

DesignSystem.propTypes = {
  colors: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.string.isRequired
    })).isRequired
  }),
  fonts: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.string.isRequired
    })).isRequired
  }),
  sizes: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.arrayOf(
        t.shape({
          name: t.string.isRequired,
          value: t.number.isRequired
        }).isRequired
      ).isRequired
    })).isRequired
  }),
  vectors: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.shape({
        origin: t.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
        direction: t.oneOf(['inside', 'outside']),
        length: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          }).isRequired
        ])
      }).isRequired
    })).isRequired
  }),
  spaces: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.shape({
        direction: t.oneOf(['inside', 'outside']),
        top: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          }).isRequired
        ]),
        right: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          }).isRequired
        ]),
        bottom: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          }).isRequired
        ]),
        left: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          }).isRequired
        ])
      })
    }))
  }),
  texts: t.shape({
    name: t.string.isRequired,
    tokens: t.arrayOf(t.shape({
      name: t.string.isRequired,
      description: t.string,
      value: t.shape({
        fontFamily: t.oneOfType([
          t.string.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.string.isRequired
          })
        ]),
        fontSize: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          })
        ]),
        lineHeight: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          })
        ]),
        color: t.oneOfType([
          t.string.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.string.isRequired
          })
        ]),
        textTransform: t.oneOfType([
          t.oneOf(['uppercase', 'lowercase']).isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.oneOf(['uppercase', 'lowercase']).isRequired
          })
        ]),
        textAlign: t.oneOfType([
          t.oneOf(['left', 'right', 'center', 'justify']).isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.oneOf(['left', 'right', 'center', 'justify']).isRequired
          })
        ]),
        letterSpacing: t.oneOfType([
          t.number.isRequired,
          t.shape({
            name: t.string.isRequired,
            value: t.number.isRequired
          })
        ])
      })
    })).isRequired
  })
};

function getOffset(props, offsets) {
  const count = Object.keys(props).slice(0, offsets.length).filter(Boolean).length;
  const offset = count * (ARTBOARD_WIDTH + 100);
  offsets.push(offset);
  return offset;
}
