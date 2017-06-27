import React from 'react';
import styled from 'styled-components/primitives';

const Styled = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export function Tiles(props) {
  return (
    <Styled name={props.name}>
      {props.children}
    </Styled>
  );
}

Tiles.displayName = 'Tiles';
