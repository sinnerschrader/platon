import React from 'react';
import styled from 'styled-components/primitives';
import {Size} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Size

\`<Size/>\` displays spatial dimensions.
It takes multiple named values as input.

This allow to define context-aware sizes,
under one name e.g. when adapting to different
screen sizes.

## Usage

\`\`\`js
  function SizeDemo() {
    return (
      <View>
        <Size origin="top">A</Label>
        <Size origin="top">B</Label>
        <Size origin="top">C</Label>
        <Size origin="top">D</Label>
      </View>
    );
  }
\`\`\`
`;

const StyledRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const StyledView = styled.View`
  margin: 10px;
`;

export default function ColorDemo() {
  return (
    <DemoContainer docs={DOC}>
      <StyledRow>
        <StyledView>
          <Size
            value={[
              {
                name: 'AA',
                value: 10
              },
              {
                name: 'AB',
                value: 20
              }
            ]}
            size={150}
            name="A"
            description="set of sizes"
            />
        </StyledView>
        <StyledView>
          <Size
            value={[
              {
                name: 'BA',
                value: 20
              },
              {
                name: 'BB',
                value: 40
              },
              {
                name: 'BC',
                value: 75
              }
            ]}
            size={150}
            name="B"
            description="different set of sizes"
            margin={10}
            />
        </StyledView>
      </StyledRow>
    </DemoContainer>
  );
}
