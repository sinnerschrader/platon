import React from 'react';
import {DesignSystem} from 'platon-components';
import {render} from 'react-sketchapp';
import config from './config';

export default context => {
  const page = context.document.currentPage();

  render((
    <DesignSystem
      page={page}
      colorTiles={config.colorTiles}
      distanceTiles={config.distanceTiles}
      fontTiles={config.fontTiles}
      spaceTiles={config.spaceTiles}
      textTiles={config.textTiles}
      vectorTiles={config.vectorTiles}
      />
  ), page);
};
