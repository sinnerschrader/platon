import React from 'react';
import {BrowserArtboard} from './artboard';
import {DemoContainer} from '../demo-container';

const DOCS = `
  # Artboard

  The \`<Artboard/>\` component bridges a small gap between
  React Sketchapp and equivalent browser renderings.

  In the browser the concept pf an \`Artboard\` does not exist by default.

  ## Usage

  \`\`\`js
    function ArtboardDemo() {
      return (
        <Artboard>
          <Text>Here could be your components</Text>
        </Artboard>
      );
    }
  \`\`\`
`;

export default () => {
  return (
    <DemoContainer docs={DOCS}>
      <BrowserArtboard
        name="Artboard"
        left={0}
        style={{
          width: 300,
          height: 350,
          borderWidth: 1,
          borderColor: '#ccc',
          borderStyle: 'solid'
        }}
        >
      </BrowserArtboard>
    </DemoContainer>
  );
};
