# Guide: Basic

:warning: Make sure you finished the guide [getting startet guide](./guides-getting-started.md)

## Create Text Styles

Text Styles is the first reference of the in [fonts](./guides-getting-started.md#add-the-next-artboard-with-fonts) defined values.

* Add the following command lines to the config.js the same way as `colors`, `fonts` and `sizes`:

  ```js
  textTiles: {
    name: 'Text Styles',
    texts: [
      {
        name: 'standard', // Defines the name of the Text Style
        fontFamily: 'HelveticaNeue-Bold', // Enter PostScript-Name
        fontSize: 90, // CSS styling
        lineHeight: 90, // CSS styling
        textAlign: 'center' // CSS styling
      }
    ]
  }
  ```

  ![Rendered Color Tile](./_media/05.png)

?> Text Style should only represent the styling of the fonts not the classification how it will be implemented.
Here you don't define a H1 you just prepare the styling what you can use for it.
Therefore you can use the same styling for different classifications.

?> Difficult at this point is the naming of the Text Styles: we use the method:
