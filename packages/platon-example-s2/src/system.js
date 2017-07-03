import React from 'react';
import {DesignSystem} from 'platon-components';
import config from '../config';

export default function System(props) {
  return (
    <DesignSystem
      page={props.page}
      colors={config.colors}
      sizes={config.sizes}
      fonts={config.fonts}
      spaces={config.spaces}
      texts={config.texts}
      vectors={config.vectors}
      />
  );
}

System.displayName = 'System';
