import React from 'react';
import ReactDOM from 'react-dom';
import {View, Text} from 'react-primitives';
import {Artboard, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from 'platon-components';

const COLOR_TILES_IN_ROW = 3;
const ARTBOARD_PADDING = 20;

const colors = [
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
];

function Application() {
  return (
    <View>
      <Artboard
        name="S2 ColorTile"
        style={{
          width: (COLOR_TILE_SIZE + COLOR_TILE_MARGIN * 2) * COLOR_TILES_IN_ROW + (ARTBOARD_PADDING * 2) ,
          padding: ARTBOARD_PADDING,
        }}
      >
        <ColorTiles colors={colors}/>
      </Artboard>
    </View>
  );
}

function main() {
  const el = document.querySelector('[data-mount]');
  ReactDOM.render(<Application/>, el);
}

window.addEventListener('DOMContentLoaded', main);
