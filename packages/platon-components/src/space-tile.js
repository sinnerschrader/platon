import React from 'react';
import {View} from 'react-primitives';
import styled from 'styled-components/primitives';
import {Element} from './element';
import {Label} from './label';
import {Tile} from './tile';

const SPACE_IMAGE = 'https://upload.wikimedia.org/wikipedia/de/archive/5/54/20080903102003%21SchraffurLeer.png';
const DEFAULT_DISTANCE = {value: 0};
const ELEMENT_WIDTH = 170;
const ELEMENT_HEIGHT = 70;
const LABEL_WIDTH = 50;
const LABEL_HEIGHT = 25;

export function SpaceTile(props) {
  return (
    <Tile
      size={props.size}
      margin={props.margin}
      headline={props.name}
      subline={props.description}
      name={`${SpaceTile.displayName} "${props.name}"`}
      >
      <Space
        direction={props.direction}
        top={props.top}
        right={props.right}
        bottom={props.bottom}
        left={props.left}
        />
    </Tile>
  );
}

SpaceTile.displayName = 'Space Tile';

const StyledImage = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
`;

function Space(props) {
  const outside = props.direction === 'outside';
  const inside = props.direction === 'inside';
  const top = props.top || DEFAULT_DISTANCE;
  const right = props.right || DEFAULT_DISTANCE;
  const bottom = props.bottom || DEFAULT_DISTANCE;
  const left = props.left || DEFAULT_DISTANCE;
  const spaces = {top, right, bottom, left};

  const vs = Object.keys(spaces)
    .reduce((r, k) => {
      const v = spaces[k];
      v.origin = k;
      r.push(v);
      return r;
    }, [])
    .filter(v => typeof v.name === 'string');

  const x = ELEMENT_WIDTH + Math.max(sum([right, left]), 2);
  const y = ELEMENT_HEIGHT + Math.max(sum([top, bottom]), 2);
  const dimensions = outside ? {width: x, height: y} : {width: ELEMENT_WIDTH, height: ELEMENT_HEIGHT};

  return (
    <Element
      corners={inside}
      shadow={false}
      width={x}
      height={y}
      >
      <StyledImage
        source={SPACE_IMAGE}
        resizeMode="repeat"
        />
      <Element
        corners={outside}
        shadow={false}
        width={ELEMENT_WIDTH}
        height={ELEMENT_HEIGHT}
        top={top.value}
        right={right.value}
        bottom={bottom.value}
        left={left.value}
        borderTop={top.value !== 0}
        borderRight={right.value !== 0}
        borderLeft={left.value !== 0}
        borderBottom={bottom.value !== 0}
        />
      <View
        style={[
          {
            position: 'absolute',
            width: inside ? ELEMENT_WIDTH : x,
            height: inside ? ELEMENT_HEIGHT : y
          },
          inside && {
            top: top.value,
            right: right.value,
            bottom: bottom.value,
            left: left.value
          }
        ]}
        >
        {
          vs.map(v => (
            <SpaceLabel
              key={v.origin}
              origin={v.origin}
              invert={inside}
              dimensions={dimensions}
              >
              {v.name}
            </SpaceLabel>
          ))
        }
      </View>
    </Element>
  );
}

const spaceLabelStyle = {
  position: 'absolute'
};

function SpaceLabel(props) {
  return (
    <View style={[spaceLabelStyle, orient(props.origin, props.dimensions)]}>
      <Label origin={props.origin} invert={props.invert}>
        {props.children}
      </Label>
    </View>
  );
}

function orient(origin, dimensions) {
  switch (origin) {
    case 'top':
      return {
        top: 0,
        left: (dimensions.width / 2) - (LABEL_WIDTH / 2)
      };
    case 'right':
      return {
        right: 0,
        top: (dimensions.height / 2) - (LABEL_HEIGHT / 2)
      };
    case 'bottom':
      return {
        bottom: 0,
        left: (dimensions.width / 2) - (LABEL_WIDTH / 2)
      };
    case 'left':
      return {
        left: 0,
        top: (dimensions.height / 2) - (LABEL_HEIGHT / 2)
      };
    default:
      return {
        top: 0
      };
  }
}

function sum(v) {
  return v.reduce((s, d) => {
    s += d.value;
    return s;
  }, 0);
}
