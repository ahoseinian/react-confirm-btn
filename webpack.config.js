var path = require('path');

module.exports = {
  entry: './lib/ConfirmBtn.js',
  output: {
    filename: 'ConfirmBtn.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactConfirmBtn',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  externals: ['react'],
};
