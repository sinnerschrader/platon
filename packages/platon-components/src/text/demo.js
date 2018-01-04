import React from 'react';
import styled from 'styled-components/primitives';
import {Text} from '.';
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
        <Text
          name="Heading Style"
          description="A text style used for large text"
          size={350}
          margin={10}
          fontFamily={{name: 'Georgia', value: 'Georgia'}}
          fontSize={50}
          lineHeight={{name: 'A', value: 60}}
          color={{name: 'Black', value: '#000'}}
          />
      </StyledRow>
    </DemoContainer>
  );
}
