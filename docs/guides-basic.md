# Guide: Basic

:warning: Make sure you finished the guide [getting startet guide](./guides-getting-started.md)

## Create Text Styles

?> Text Style represent the `CSS styling` of a font **not** the classification
 like `H1`, `H2`, `H3` or `p`. <br>
Therefore you can use the same styling for different usecases like Buttons, Links and Copytext.

Text Styles is the first reference of the in [fonts](./guides-getting-started.md#_3.-Add-the-next-artboard-with-fonts) defined values.

* Add the following command lines to the config.js the same way as *colors*, *fonts* and *sizes*:

  ```js
  textTiles: {
    name: 'Text Styles',
    texts: [
      {
        name: 'huge', // Defines the name of the Text Style
        fontFamily: 'HelveticaNeue-Bold', // Enter PostScript-Name
        fontSize: 90, // CSS styling
        lineHeight: 90, // CSS styling
        textAlign: 'center' // CSS styling
      }
    ]
  }
  ```

  ![Rendered Color Tile](./_media/05.png)

?> Difficult at this point is the naming of the Text Styles. We use the approche
of discriping adjectives: **gigantic**, **huge**, **tall**, **average**, **tiny**, **mirco**.

## Make your styling smarter

In the Text Style CSS styling you maybe noticed that we set values we already
defined in `fonts`, `colors` and `sizes`. So lets include the references in our
styling like this:

```js
 Insert example Code
```
