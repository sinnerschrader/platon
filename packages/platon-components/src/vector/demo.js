import React from 'react';
import styled from 'styled-components/primitives';
import {Vector} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Vector

Combines a \`Size\` with a \`direction\` (inside, outside) and \`origin\` (top, right, bottom, left)
to form definitions that can be used as systemized margins and paddings.

## Usage

\`\`\`js
function VectorDemo() {
  return (
    <Vector
      name="A"
      direction="outside"
      description="Primary outer spacing of elements"
      size={350}
      margin={10}
      length={15}
      origin="bottom"
      />
  );
}
\`\`\`
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
