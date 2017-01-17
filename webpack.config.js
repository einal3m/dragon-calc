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
      { test: /\.png/, loader: 'url-loader?limit=8192' },
      { test: /\.csv$/, loader: 'csv-loader' },
    ],
  },
  csv: {
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
