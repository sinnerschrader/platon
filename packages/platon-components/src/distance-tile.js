import React from 'react';
import {View, Text} from 'react-primitives';
import {Tile} from './tile';

const STAGE_PADDING = 20;
const BARS_MARGIN_BOTTOM = 5;
const BAR_WIDTH = 25;
const BAR_MARGIN = 4;
const BAR_LABEL_HEIGHT = 20;
const BAR_VALUE_HEIGHT = 20;

const barsStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginBottom: BARS_MARGIN_BOTTOM
};

export function DistanceTile(props) {
  const count = props.values.length;
  const width = Math.max(props.size, (count * BAR_WIDTH) + (count * BAR_MARGIN));
  const max = props.values.map(v => v.value).sort((a, b) => b - a)[0];
  const height = Math.max(props.size, max + (STAGE_PADDING * 4) + BARS_MARGIN_BOTTOM + BAR_LABEL_HEIGHT + BAR_VALUE_HEIGHT);

  return (
    <Tile
      name="DistanceTile"
      headline={props.headline}
      subline={props.subline}
      size={props.size}
      width={Math.ceil(width / props.size) * props.size}
      height={Math.ceil(height / props.size) * props.size}
      margin={props.margin}
      >
      <View style={barsStyles} name="Bars">
        {
          props.values.map(value => {
            return (
              <Bar
                key={JSON.stringify(value)}
                label={value.name}
                value={value.value}
                />
            );
          })
        }
      </View>
    </Tile>
  );
}

DistanceTile.displayName = 'DistanceTile';

const barStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingRight: BAR_MARGIN
};

const barValueStyle = {
  fontWeight: 'bold',
  fontSize: 12,
  lineHeight: BAR_VALUE_HEIGHT,
  textAlign: 'center'
};

const barGraphStyle = {
  width: BAR_WIDTH,
  backgroundColor: '#000'
};

const barLabelStyle = {
  fontSize: 11,
  lineHeight: BAR_LABEL_HEIGHT,
  textAlign: 'center'
};

function Bar(props) {
  return (
    <View name={`${props.label} Bar`} style={barStyle}>
      <Text style={barValueStyle}>
        {String(props.value)}
      </Text>
      <View
        style={[
          barGraphStyle,
          {
            height: props.value
          }
        ]}
        />
      <Text style={barLabelStyle}>{String(props.label)}</Text>
    </View>
  );
}
