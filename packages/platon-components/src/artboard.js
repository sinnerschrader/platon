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

class SketchArtboard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const Art = require('react-sketchapp').Artboard;
      const toJSON = require('react-sketchapp').renderToJSON;
      const fromJSON = require('sketchapp-json-plugin').fromSJSONDictionary;
      const toLayer = e => fromJSON(toJSON(e));
      const layer = toLayer(<Art style={this.props.style} name={this.props.name}>{this.props.children}</Art>);

      const frame = layer.frame();
      frame.setX(this.props.left);
      frame.setY(this.props.top);

      this.props.page.addLayers([layer]);
    });
  }

  render() {
    return null;
  }
}

SketchArtboard.defaultProps = {
  left: 0,
  top: 0
};

export const Artboard = global.document ? BrowserArtboard : SketchArtboard;
Artboard.displayName = 'Artboard';
