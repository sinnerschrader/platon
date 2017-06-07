import React from 'react';
import ReactDOM from 'react-dom';
import System from './system';

function main() {
  ReactDOM.render(<System/>, document.querySelector('[data-mount]'));
}

window.addEventListener('DOMContentLoaded', main);
