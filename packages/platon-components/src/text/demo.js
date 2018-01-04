import React from 'react';
import styled from 'styled-components/primitives';
import {Text} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Text

\`<Text/>\` gathers all styling relevant to a body of text,
including \`fontFamily\`, \`fontSize\`, \`lineHeight\`, \`color\`, \`textTransform\`, \`textAlign\` and \`letterSpacing\`.

This allow to define context-aware sizes,
under one name e.g. when adapting to different
screen sizes.

## Usage

\`\`\`js
function SpaceDemo() {
  return (
    <View>
      <Text
        name="A"
        description="Text styles are made up of many properties"
        fontFamily={{name: 'Georgia', value: 'Georgia'}}
        fontSize={50}
        lineHeight={{name: 'A', value: 60}}
        color={{name: 'Black', value: '#000'}}
        >
          Die Philosophie bietet mir einen Hafen,
          während ich andere mit den Stürmen kämpfen sehe.
      </Text>
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
        <Text
          name="Heading Style"
          description="A text style used for large text"
          size={350}
          margin={10}
          fontFamily={{name: 'Georgia', value: 'Georgia'}}
          fontSize={50}
          lineHeight={{name: 'A', value: 60}}
          color={{name: 'Black', value: '#000'}}
          >
            Die Philosophie bietet mir einen Hafen,
            während ich andere mit den Stürmen kämpfen sehe.
        </Text>
      </StyledRow>
    </DemoContainer>
  );
}
