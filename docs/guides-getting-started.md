# Guide: Getting started

** :warning: Make sure you have all prerequesites installed. You can follow the [prerequesites guide](./guides-prerequesites.md) for a step-by-step instruction.**

This guide makes you familiar with `platon` and helps you to understand the basic concepts of configuring a design system.

After completion of this guide you should end up with a directory comparable to the [platon-example-getting-started](https://git.io/vQBfi) project.

[1. Setup](guides-getting-started.md#_1-Setup) <br>
[2. Create your first Artboard](guides-getting-started.md#_2-Create-your-first-Artboard) <br>
[2.1. Add more colors](guides-getting-started.md#_21-Add-more-colors) <br>
[3. Add the next Artboard with fonts](guides-getting-started.md#_3-Add-the-next-Artboard-with-fonts) <br>
[4. Define the basic sizes](guides-getting-started.md#_4-define-the-basic-sizes)

## 1. Setup

```sh
# Enter in a terminal session
curl https://codeload.github.com/sinnerschrader/platon/tar.gz/master | tar -xz --strip=2 platon-master/packages/platon-example-getting-started
cd platon-example-getting-started
atom .
npm install
npm run reset
npm start
```

If everything works a new, empty Sketch document opens and your terminal prints messages like

```
> platon-example-getting-started@1.0.3 prestart ~/platon-example-getting-started
> ensure-sketch-document

> platon-example-getting-started@1.0.3 start ~/platon-example-getting-started
> skpm build --watch --run

🖨  Copied manifest.json in 16ms
🔩  Built index.js in 3276ms
```

## 2. Create your first Artboard

* Open `config.js` in Atom
* Define your first `colors` Artboard like this:

  ```js
  export default {
    colorTiles: {
      name: 'colors',
      colors: [
        {
          name: 'blue',
          hex: '#0406DB'
        }
      ]
    }
  }
  ```

* Saving `config.js` triggers the file watcher and causes a new build, producing an Artboard like this

  ![Rendered Color Tile](./_media/01.png)

## 2.1. Add more colors

* platon recognizes objects with the `.name` and `.hex` keys as colors, e.g.:

  ```js
  // Next color you'll add to .colorTiles.colors
  {
    name: 'red', // Define the name of this color
    hex: '#bc0021' // Define the actual color value used for the color tile
  }
  ```

* In our example those colors live on the `.colors` key of `.colorTiles`. This means you can add new colors by appending them to the colors array.
* The following examples has two colors with the names `blue` and `red`:

  ```js
  export default {
    colorTiles: {
      name: 'colors', // Sets the name of the artboard
      colors: [
        {
          name: 'blue', // Define the name of this color
          hex: '#0406DB' // Define the actual color value used for the color tile
        },
        {
          name: 'red', // Define the name of this color
          hex: '#bc0021' // Define the actual color value used for the color tile
        }
      ]
    }
  }
  ```

  ![Rendered Color Tile](./_media/02.png)

* This demonstrates two important principles of `platon`
* All tokens in a platon design system have a `name`, e.g. "red" and a `value`, e.g. "#ff0000"
* All predefined Artbaord types take an array of tokens. This means they can display more than one token.

## 3. Add the next Artboard with fonts

* Define your second `fonts` Artboard like this:

  ```js
  export default {
    colorTiles: {
      name: 'colors',
      colors: [
        {
          name: 'blue',
          hex: '#0406DB'
        },
        {
          name: 'red',
          hex: '#bc0021'
        }
      ]
    },
    fontTiles: {
      name: 'fonts', // Sets the name of the artboard
      fonts: [
        {
          name: 'Helvetica Neue', // Define the name of this the font
          weight: 'Bold', // Define the weight showing on the tile
          family: 'HelveticaNeue-Bold' // Define the actual displayed font - use PostScript-Name.
        }
      ]
    }
  }
  ```

* To display the right font use the `PostScript-Name` for the `family` key.

  ![Rendered Color Tile](./_media/03.png)

* You can add more fonts the same way as you added more colors.

## 4. Define the basic sizes

 * Define your third `sizes` Artboard like this:

 ?> In our example you can create sets of clustered sizes.
 The first set in this example is called `mobile`.

  ```js
  export default {
    colorTiles: {
      name: 'colors',
      colors: [
        {
          name: 'blue',
          hex: '#0406DB'
        },
        {
          name: 'red',
          hex: '#bc0021'
        }
      ]
    },
    fontTiles: {
      name: 'fonts',
      fonts: [
        {
          name: 'Helvetica Neue',
          weight: 'Bold',
          family: 'HelveticaNeue-Bold'
        }
      ]
    },
    distanceTiles: {
      name: 'sizes', // Sets the name of the artboard
      distances: [
        {
          name: 'mobile', // Define the name of this the tile
          values: [
            {
              name: 'XXS', // Define the name of the size
              value: 3 // Define the value of the size
            },
            {
              name: 'XS', // Define the name of the size
              value: 6 // Define the value of the size
            },
            {
              name: 'S', // Define the name of the size
              value: 12 // Define the value of the size
            }
          ]
        }
      ]
    }
  }
  ```
?> Sketch don't automaticly zoom to the new Artboard. Use `⌘ + 1` to see all artboard in the canvas.

![Rendered Color Tile](./_media/04.png)
