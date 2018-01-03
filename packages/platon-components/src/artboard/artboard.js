import React from 'react';
import {View, Text} from 'react-primitives';

const labelStyle = {
  color: '#929292',
  fontSize: '1.4vw',
  lineHeight: '2.4vw',
  padding: 3
};

function BrowserArtboard(props) {
  return (
    <View>
      {
        props.name &&
          <Text style={labelStyle}>{props.name}</Text>
      }
      <View style={[{backgroundColor: '#fff'}, props.style]}>
        {props.children}
      </View>
    </View>
  );
}

function SketchArtboard(props) {
  const Art = require('react-sketchapp').Artboard;
  const toJSON = require('react-sketchapp').renderToJSON;
  const fromJSON = require('sketchapp-json-plugin').fromSJSONDictionary;
  const RedBox = require('react-sketchapp').RedBox;
  const toLayer = e => fromJSON(toJSON(e));

  try {
    const layer = toLayer(<Art style={props.style} name={props.name}>{props.children}</Art>);
    const frame = layer.frame();
    frame.setX(props.left);
    frame.setY(props.top);
    setTimeout(() => {
      props.page.addLayers([layer]);
    });
  } catch (err) {
    const layer = toLayer(<Art style={props.style} name={props.name}><RedBox error={err}/></Art>);
    const frame = layer.frame();
    frame.setX(props.left);
    frame.setY(props.top);
    setTimeout(() => {
      props.page.addLayers([layer]);
    });
  }

  return null;
}

SketchArtboard.defaultProps = {
  left: 0,
  top: 0
};

export {BrowserArtboard, SketchArtboard};
export const Artboard = global.document ? BrowserArtboard : SketchArtboard;
Artboard.displayName = 'Artboard';
