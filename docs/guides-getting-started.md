# Guide: Getting started

** :warning: Make sure you have all prerequesites installed. You can follow the [prerequesites guide](./guides-prerequesites.md) for a step-by-step instruction.**

This guide makes you familiar with `platon` and helps you to understand the basic concepts of configuring a design system.

After completion of this guide you should end up with a directory comparable to the [platon-example-getting-started](https://git.io/vQBfi) project.

## Setup

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

## Config

* Open `config.js` in Atom
* Define your first "colors" Artboard like this:

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
