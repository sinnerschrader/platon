import React from 'react';
import {render} from 'react-sketchapp';
import System from './system';

export default context => {
  const page = context.document.currentPage();

  render(<System/>, page);
  moveArtboardsTop(page);
};

/**
 * Artboard have to be direct children of 
 * the page to behave and render correctly.
 */
function moveArtboardsTop(page) {
  // Find all artboards
  const artboards = getArtboards(page);

  artboards.forEach((a, i) => {
    const p = artboards[i - 1];

    // If this is not the first artboard, ensure correct offset 
    if (p) {
      const af = a.frame();
      const pf = p.frame();
      af.setX(pf.maxX() + 100);
    }

    a.removeFromParent();
    page.addLayers([a]);
  });

  // Remove everything from root that is not an artboard
  arrayify(page.layers())
    .filter(l => !(l instanceof MSArtboardGroup))
    .forEach(l => {
      if (String(l.name()) !== 'RedBox') {
        l.removeFromParent()
      }
    });
}

function arrayify(list) {
  const result = [];
  for (let i = 0; i < list.count(); i++) {
    result.push(list.objectAtIndex(i));
  }
  return result;
}

function getArtboards(page) {
  return getLayers(page).filter(l => l instanceof MSArtboardGroup);
}

function getLayers(r, seed = []) {
  const layers = arrayify(r.layers());
  layers.forEach(l => {
    seed.push(l);
    if (typeof l.layers === 'function') {
      getLayers(l, seed);
    }
  });
  return seed;
}