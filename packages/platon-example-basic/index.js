import React from 'react';
import {DesignSystem} from 'platon-components';
import {render} from 'react-sketchapp';
import config from './config';

export default context => {
  const page = context.document.currentPage();
  render((
    <DesignSystem
      page={page}
      colors={config.colors}
      sizes={config.sizes}
      fonts={config.fonts}
      spaces={config.spaces}
      texts={config.texts}
      vectors={config.vectors}
      />
  ), page);
};
