import React from 'react';
import {DesignSystem} from 'platon-components';
import config from '../config';

export default function System() {
  return (
    <DesignSystem
      colorTiles={config.colorTiles}
      distances={config.distances}
      fontTiles={config.fontTiles}
      vectorTiles={config.vectorTiles}
      />
  );
}

System.displayName = 'System';
