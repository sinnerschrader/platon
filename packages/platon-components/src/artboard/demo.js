import React from 'react';
import styled from 'styled-components';
import tag from 'tag-hoc';
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

const Example = styled(tag(['first'])('div'))`
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: 25px;
  background: #eee;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  ${props => props.first ? 'margin-top: 10px;' : ''}
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
        <Example first/>
        <Example/>
        <Example/>
      </BrowserArtboard>
    </DemoContainer>
  );
};
