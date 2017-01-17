module.exports = function exports(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
      'src/test-index.js',
    ],

    frameworks: ['jasmine', 'phantomjs-shim'],

    preprocessors: {
      'src/test-index.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!sass' },
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
      watch: true,
      resolve: { extensions: ['', '.js', '.jsx'] },
    },

    autoWatch: true,

    reporters: ['progress'],

    webpackMiddlewareServer: {
      noInfo: true,
    },

    webpackServer: {
      quiet: true,
    },

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-shim',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
    ],
  });
};
