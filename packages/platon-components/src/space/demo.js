import React from 'react';
import styled from 'styled-components/primitives';
import {Space} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Space

\`<Space/>\` displays padding and margin areas on elements.
It takes a struct (\`top\`, \`right\`, \`bottom\`, \`left\`) of named values and a direction of either
\`inside\` or \`outside\`.

This allow to define context-aware sizes,
under one name e.g. when adapting to different
screen sizes.

## Usage

\`\`\`js
function SpaceDemo() {
  return (
    <View>
      <Space
        size={250}
        origin="top"
        name="Space A"
        direction="Primary spacing between elements"
        direction="outside"
        bottom={{
          name: 'Size A',
          value: 15
        }}
        />
    </View>
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
        <Space
          size={250}
          margin={10}
          name="AA..AD outside"
          description="A space is a collection of sizes with a direction"
          direction="outside"
          top={{
            name: 'AA',
            value: 10
          }}
          right={{
            name: 'AB',
            value: 15
          }}
          bottom={{
            name: 'AC',
            value: 10
          }}
          left={{
            name: 'AD',
            value: 15
          }}
          />
        <Space
          size={250}
          margin={10}
          name="BA..BD outside"
          description="A space is a collection of sizes with a direction"
          direction="inside"
          top={{
            name: 'BA',
            value: 10
          }}
          right={{
            name: 'BB',
            value: 15
          }}
          bottom={{
            name: 'BC',
            value: 10
          }}
          left={{
            name: 'BD',
            value: 15
          }}
          />
      </StyledRow>
    </DemoContainer>
  );
}
