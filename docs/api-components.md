# API: Components

## DesignSystem

* **colors**: Color tokens to render
* required: false
* default: null

  ```js
  // Type
  {
    name: string;
    tokens: {
        name: string;
        description?: string;
        value: string;
      }[];
    }
  }
  ```

  ```js
  // Example
  import {DesignSystem} from 'platon';

  const colors = {
      name: 'Colors',
      tokens: [
        {
          name: 'Red',
          value: '#ff0000'
        },
        {
          name: 'Green',
          value: '#00ff00'
        },
        {
          name: 'Blue',
          value: '#0000ff'
        }
      ]
    }
  };
  
  export default () => <DesignSystem colors={colors}/>;
  ```

## Colors
