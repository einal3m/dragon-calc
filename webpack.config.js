const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/entry.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.png/, loader: 'url-loader?limit=8192' },
      { test: /\.csv$/, loader: 'csv-loader' },
    ],
  },
  csv: {
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true,
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
