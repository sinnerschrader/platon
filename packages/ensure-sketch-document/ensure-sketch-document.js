#! /usr/bin/env node
const as = require('applescript');

function main(_, cb) {
  return as.execString(`
    tell application "Sketch"
      activate
    end tell

    tell application "System Events"
      keystroke "n" using {command down}
    end tell
  `, cb);
}

main({}, err => {
  if (err) {
    throw err;
  }
});
