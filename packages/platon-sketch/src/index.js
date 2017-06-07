import React from 'react';
import PropTypes from 'prop-types';
import { render, Text, View } from 'react-sketchapp';
import {Artboard, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from 'platon-components';
import colors from './colors';

const COLOR_TILES_IN_ROW = 3;
const ARTBOARD_PADDING = 20;

const artboardStyle = {
  width: (COLOR_TILE_SIZE + COLOR_TILE_MARGIN * 2) * COLOR_TILES_IN_ROW + (ARTBOARD_PADDING * 2) ,
  padding: ARTBOARD_PADDING,
};

export default (context) => {
  render((
    <Artboard
      name="S2 ColorTile"
      style={artboardStyle}
      >
      <ColorTiles colors={colors}/>
    </Artboard>
  ), context.document.currentPage());
}
