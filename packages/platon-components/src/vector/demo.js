import React from 'react';
import styled from 'styled-components/primitives';
import {Vector} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `

`;

const StyledRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export default function SpaceDemo() {
  return (
    <DemoContainer docs={DOC}>
      <StyledRow>
        <Vector
          name="A"
          direction="outside"
          description="Primary outer spacing of elements"
          size={350}
          margin={10}
          length={15}
          origin="bottom"
          />
        <Vector
          name="B"
          direction="inside"
          description="Primary inner spacing of elements"
          size={350}
          margin={10}
          length={5}
          origin="top"
          />
      </StyledRow>
    </DemoContainer>
  );
}
