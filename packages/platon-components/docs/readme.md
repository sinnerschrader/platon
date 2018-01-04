---
displayName: Documentation
---

> Create design system artifacts from a single archetype

# platon-components

* 💻 Use in browser
* 💎 Render to sketch
* 📈 Visualize `platon` primitives

`platon` is a project that accelerates the creation and definition
of design systems by providing a set of useful primitives.

The components found in this component library are the basic building
blocks for the visualisation of said primitives.

## Installation

```
npm install --save platon-components
```

## Usage

```js
import React from 'react';
import {Artboard, Font} from 'platon-components';

return function PlatonComponentDemo() {
  return (
    <Artboard name="Fonts">
      <Font
        description="Demonstrate a serif font"
        family="Georgia"
        headline="Georgia"
        margin={10}
        name="Georgia"
        size={300}
        />
    </Artboard>
  )
}
```
