import React from 'react';
import {Text, View} from 'react-primitives';
import {Artboard, ColorTiles, COLOR_TILE_SIZE, COLOR_TILE_MARGIN} from '.';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

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
        name={"Fontfamily"}
        style={colorTilsArtboardStyle}
        >
        <View style={[{
          height: COLOR_TILE_SIZE,
          width: COLOR_TILE_SIZE,
          margin: COLOR_TILE_MARGIN,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }, {backgroundColor: '#f2f2f2'}]}>
          <View style={[
            descriptionStyles,
            {backgroundColor: '#f2f2f2'}
          ]}>
            <Text style={{fontSize:30, lineHeight:40}}>
              "Schönheit bietet eine natürliche Überlegenheit."
            </Text>
          </View>
          <View style={[descriptionStyles, {}]}>
            <Text style={headlineStyles}>
              Helvetica Neue
            </Text>
            <Text style={sublineStyles}>
              Regular
            </Text>
          </View>
        </View>
      </Artboard>
  </View>
);
