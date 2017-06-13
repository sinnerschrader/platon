import React from 'react';
import {DesignSystem} from 'platon-components';
import config from '../config';

export default () => (
  <DesignSystem
    colorTiles={config.colorTiles}
    fontTiles={config.fontTiles}
    distances={config.distances}
    />
);
