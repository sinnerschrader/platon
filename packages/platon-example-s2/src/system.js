import React from 'react';
import {DesignSystem} from 'platon-components';
import config from '../config';

export default function System() {
  return (
    <DesignSystem
      colorTiles={config.colorTiles}
      distanceTiles={config.distanceTiles}
      fontTiles={config.fontTiles}
      spaceTiles={config.spaceTiles}
      textTiles={config.textTiles}
      vectorTiles={config.vectorTiles}
      />
  );
}

System.displayName = 'System';
