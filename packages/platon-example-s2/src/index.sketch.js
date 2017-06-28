import React from 'react';
import {render} from 'react-sketchapp';
import System from './system';

export default context => {
  const page = context.document.currentPage();
  render(<System page={page}/>, page);
};
