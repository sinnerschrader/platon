import React from 'react';
import {Text, View} from 'react-primitives';
import {Artboard, FontTiles, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';

const COLOR_TILES_IN_ROW = 3;
const ARTBOARD_PADDING = 20;


const colorTilsArtboardStyle = {
  width: (COLOR_TILE_SIZE + COLOR_TILE_MARGIN * 2) * COLOR_TILES_IN_ROW + (ARTBOARD_PADDING * 2) ,
  padding: ARTBOARD_PADDING,
};

export const DesignSystem = (props) => (
  <View>
    {props.colorTiles &&
      <Artboard
        name={props.colorTiles.name}
        style={colorTilsArtboardStyle}
        >
        <ColorTiles colors={props.colorTiles.colors}/>
      </Artboard>
    }
      <Artboard
        name={props.fontTiles.name}
        style={colorTilsArtboardStyle}
        >
        <FontTiles fonts={props.fontTiles.fonts}/>
      </Artboard>
  </View>
);
