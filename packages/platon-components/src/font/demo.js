import React from 'react';
import styled from 'styled-components/primitives';
import {Font} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Font

The \`<Font/>\` displays a well-known \`font-family\` value and its meta data.

## Usage

\`\`\`js
  function FontDemo() {
    return (
      <Font
        description="Demonstrate a serif font"
        family="Georgia"
        headline="Georgia"
        margin={10}
        name="Georgia"
        size={300}
        >
    );
  }
\`\`\`

## Notes

* Use a container with \`flex-direction: row;\` to display multiple fonts side by side

`;

const StyledView = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

export default function ColorDemo() {
  return (
    <DemoContainer docs={DOC}>
      <StyledView>
        <Font
          description="Demonstrate a monospace font"
          family="monospace"
          fontSize={20}
          headline="Monospace"
          lineHeight={30}
          margin={10}
          name="monospace"
          size={250}
          >„Sch&ouml;nheit bietet eine natürliche Überlegenheit.”
        </Font>
        <Font
          description="Demonstrate a serif font"
          family="Georgia"
          headline="Georgia"
          margin={10}
          name="Georgia"
          size={300}
          >„Sch&ouml;nheit bietet eine natürliche Überlegenheit.”
        </Font>
      </StyledView>
    </DemoContainer>
  );
}
