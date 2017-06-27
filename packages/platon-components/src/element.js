import React from 'react';
import {View} from 'react-primitives';
import styled from 'styled-components/primitives';

const StyledContainer = styled.View`
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  padding: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  ${props => props.absolute && `
    top: ${props.top};
    right: ${props.right};
    bottom: ${props.bottom};
    left: ${props.left};
  `}
`;

const StyledElement = styled.View`
  background-color: #fff;
  border-style: solid;
  border-color: #000000;
  border-width: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  shadow-color: rgba(0, 0, 0, 0.2);
  shadow-radius: 5;
`;

export function Element(props) {
  const absolute = [props.top, props.right, props.bottom, props.left].some(c => typeof c !== 'undefined');

  return (
    <StyledContainer
      absolute={absolute}
      name="Element Container"
      width={props.width}
      height={props.height}
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
      >
      <StyledElement
        name="Element"
        width={props.width}
        height={props.height}
        style={[
          props.shadow && {
            shadowOffset: getShadow(props.origin)
          },
          props.borderTop && {
            borderTopWidth: 1
          },
          props.borderRight && {
            borderRightWidth: 1
          },
          props.borderBottom && {
            borderBottomWidth: 1
          },
          props.borderLeft && {
            borderLeftWidth: 1
          }
        ]}
        >
        {props.children}
      </StyledElement>
      {
        props.corners && [
          <ElementCorner key={0} top right/>,
          <ElementCorner key={1} bottom right/>,
          <ElementCorner key={2} bottom left/>,
          <ElementCorner key={3} top left/>
        ]
      }
    </StyledContainer>
  );
}

Element.displayName = 'Element';

Element.defaultProps = {
  corners: true,
  shadow: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true
};

const StyledElementCorner = styled.View`
  background-color: #fff;
  border-style: solid;
  border-color: #000000;
  border-width: 1;
  width: 5;
  height: 5;
`;

function ElementCorner(props) {
  return (
    <View style={[{position: 'absolute'}, getOrientation(props)]}>
      <StyledElementCorner>
        {props.children}
      </StyledElementCorner>
    </View>
  );
}

ElementCorner.displayName = 'ElementCorner';

function getOrientation(props) {
  const o = {};

  if (props.left) {
    o.left = -2;
  }

  if (props.right) {
    o.right = -2;
  }

  if (props.top) {
    o.top = -2;
  }

  if (props.bottom) {
    o.bottom = -2;
  }

  return o;
}

function getShadow(origin) {
  const DIMENSION = 2;

  switch (origin) {
    case 'top':
      return {width: 0, height: -DIMENSION};
    case 'right':
      return {width: DIMENSION, height: 0};
    case 'bottom':
      return {width: 0, height: DIMENSION};
    case 'left':
      return {width: 0, height: DIMENSION};
    default:
      return {width: 0, height: DIMENSION};
  }
}
