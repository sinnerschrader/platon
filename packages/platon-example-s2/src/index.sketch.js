import React from 'react';
import {render} from 'react-sketchapp';
import System from './system';

export default context => {
  render(<System/>, context.document.currentPage());
};
