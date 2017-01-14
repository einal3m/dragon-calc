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
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
