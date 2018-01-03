import React from 'react';
import styled from 'styled-components/primitives';
import {Label} from '.';
import {DemoContainer} from '../demo-container';

const DOC = `
# Label

\`<Label/>\` displays named directions.

## Usage

\`\`\`js
  function LabelDemo() {
    return (
      <View>
        <Label origin="top">A</Label>
        <Label origin="top">B</Label>
        <Label origin="top">C</Label>
        <Label origin="top">D</Label>
      </View>
    );
  }
\`\`\`
`;

const StyledRow = styled.View`
  flex-direction: row;
`;

const StyledView = styled.View`
  margin: 10px;
`;

export default function ColorDemo() {
  return (
    <DemoContainer docs={DOC}>
      <StyledRow>
        <StyledView>
          <Label origin="top">A</Label>
        </StyledView>
        <StyledView>
          <Label origin="right">B</Label>
        </StyledView>
        <StyledView>
          <Label origin="bottom">C</Label>
        </StyledView>
        <StyledView>
          <Label origin="left">D</Label>
        </StyledView>
      </StyledRow>
    </DemoContainer>
  );
}
