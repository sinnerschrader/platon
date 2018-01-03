import React from 'react';
import styled from 'styled-components/primitives';
import {Color} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Color

The \`<Color/>\` displays a well-known color value and its meta data.

## Usage

\`\`\`js
  function ColorDemo() {
    return (
      <Color
        name="white"
        headline="White"
        hex="#ffffff"
        description="The lightest possible color"
        margin={10}
        size={150}
        >
    );
  }

## Notes

* \`props.children\` are ignored
* Use a container with \`flex-direction: row;\` to display multiple colors side by side
\`\`\`
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
        <Color
          name="white"
          headline="White"
          hex="#ffffff"
          description="The lightest possible color"
          size={150}
          margin={10}
          />
        <Color
          name="black"
          headline="Black"
          hex="#000000"
          description="The darkest possible color"
          size={150}
          margin={10}
          />
      </StyledView>
    </DemoContainer>
  );
}
