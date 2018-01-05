import React from 'react';
import styled from 'styled-components/primitives';
import {View, Text} from 'react-primitives';
import redent from 'redent';

const tileStyles = {
  position: 'relative',
  display: 'flex'
};

const stageStyles = {
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f2f2f2'
};

const descriptionStyles = {
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  backgroundColor: '#fff'
};

const headlineStyles = {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 30
};

const sublineStyles = {
  fontSize: 14,
  lineHeight: 15
};

export function Tile(props) {
  const height = typeof props.height === 'number' ? props.height : props.size;
  const width = typeof props.width === 'number' ? props.width : props.size;
  const description = redent(props.subline || '').split('\n');

  const descriptionHeight = [
    props.headline ? 30 : 0,
    description.length * 20
  ].reduce((m, i) => m + i, 0);

  const stageHeight = height - descriptionHeight;

  return (
    <Container
      name={props.name}
      style={[
        tileStyles,
        {
          width: width,
          height: height,
          margin: props.margin
        }
      ]}
      >
      <Description
        name="Tile Description"
        style={descriptionStyles}
        >
        <Text style={headlineStyles}>
          {props.headline}
        </Text>
        {description.map((d, i) => <Text key={String(i)} style={sublineStyles}>{d}</Text>)}
      </Description>
      <View
        name="Tile Stage"
        style={[
          stageStyles,
          {
            height: stageHeight,
            width: width
          }
        ]}
        >
        {props.children}
      </View>
    </Container>
  );
}

Tile.displayName = 'Tile';

const Container = styled.View`
  position: relative;
`;

const Description = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;
