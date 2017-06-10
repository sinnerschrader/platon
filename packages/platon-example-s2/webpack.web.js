const path = require('path');

module.exports = {
  entry: './src/index.web.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require('babel-preset-es2015'),
              require('babel-preset-react')
            ]
          }
        }
      }
    ]
  }
};
