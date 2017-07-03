# Guide: Basic

:warning: Make sure you finished the guide [getting started guide](./guides-getting-started.md)

## 1. Create Text Styles

Text Styles represent bundles of text-related styling such as `font-family`, `line-height` etc. As such they are on a different level of abstraction than both components and fonts.

It may be useful to think of Text Styles as CSS classes specialized and constrained to text-specific properties.

![Font Hierarchy](./_media/font-hierarchy.svg)

  ```js
  // in config.js
  export default {
    texts: {
      name: 'Text Styles',
      tokens: [
        {
          name: 'huge', // Defines the name of the Text Style
          value: {
            fontFamily: 'HelveticaNeue-Bold', // Enter PostScript-Name
            fontSize: 90, // CSS styling
            lineHeight: 90, // CSS styling
            textAlign: 'center' // CSS styling
          }
        }
      ]
    }
  };
  ```

  ![Rendered Color Tile](./_media/05.png)

## 2. Make your Text Styles a bit smarter

If you followed along the [Getting started](./guides-getting-started.md) guide you may have noticed that the Text Style CSS styling you maybe noticed that the rendered Text Styles print information that is already contained in lower level tokens, such as `fonts`. In order to hide this information you can use **named values** like this:

```js
export default {
  texts: {
    name: 'Text Styles',
    tokens: [
      {
        name: 'huge',
        value: {
          fontFamily: {
            name: 'HNB',
            value: 'HelveticaNeue-Bold'
          }
        }
      }
    ]
  }
};
```

This is especially useful to emphasize the relationship between different tokens without coupling them explicitly:

```js
export default {
  fonts: {
    name: 'Fonts',
    tokens: [
      {
        name: 'HNB',
        description: `
          Helvetica Neue
          Bold
        `,
        value: 'HelveticaNeue-Bold'
      }
    ]
  },
  texts: {
    name: 'Text Styles',
    tokens: [
      {
        name: 'huge',
        value: {
          fontFamily: {
            name: 'HNB',
            value: 'HelveticaNeue-Bold'
          },
          fontSize: 60
        }
      }
    ]
  }
};
```

As `config.js` contains JavaScript you can couple the tokens explicitly for greater consistency:

```js
const HNB = {
  name: 'HNB',
  value: 'HelveticaNeue-Bold'
};

export default {
  fonts: {
    name: 'Fonts',
    tokens: [
      {
        ...HNB,
        description: `
          Helvetica Neue
          Bold
        `
      }
    ]
  },
  texts: {
    name: 'Text Styles',
    tokens: [
      {
        name: 'huge',
        value: {
          fontFamily: HNB,
          fontSize: 60
        }
      }
    ]
  }
};
```
