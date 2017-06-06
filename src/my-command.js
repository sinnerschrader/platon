import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';

import {ColorTile, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from './color-tile';

const COLOR_TILES_IN_ROW = 3;
const ARTBOARD_PADDING = 20;

const Document = ({ colors }) => (
  <Artboard
    name="S2 ColorTile"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (COLOR_TILE_SIZE + COLOR_TILE_MARGIN * 2) * COLOR_TILES_IN_ROW + (ARTBOARD_PADDING * 2) ,
      padding: ARTBOARD_PADDING,
    }}
  >
    {colors.map(c => <ColorTile name={c.name} hex={c.hex} key={c.name} />)}
  </Artboard>
);

export default (context) => {
  const colorList = [
    {
      name: 'S2 BLUE',
      hex: '#4502DA'
    },
    {
      name: 'S2 RED',
      hex: '#FF0354'
    },
    {
      name: 'S2 GREEN',
      hex: '#03FFB7'
    },
    {
      name: 'S2 BLACK',
      hex: '#1E212A'
    },
    {
      name: 'S2 GREY',
      hex: '#F4F7FA'
    },
    {
      name: 'S2 WHITE',
      hex: '#FFFFFF'
    },
    
  ]

  render(<Document colors={colorList} />, context.document.currentPage());
}
