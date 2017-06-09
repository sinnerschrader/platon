import React from 'react';
import ReactDOM from 'react-dom';
import System from './system';

function main() {
  ReactDOM.render(<System/>, global.document.querySelector('[data-mount]'));
}

global.addEventListener('DOMContentLoaded', main);
