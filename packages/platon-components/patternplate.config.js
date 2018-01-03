module.exports = {
  docs: ['docs/**/*.md'],
  entry: ['lib/**/demo.js'],
  render: '@patternplate/render-react/render',
  mount: '@patternplate/render-react/mount',
  ui: {
    title: 'platon-components'
  }
};
