var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
    ],
    files: [
      {
        pattern: 'tests.webpack.js',
        watched: false,
      },
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
      ],
    },

    reporters: [
      'spec',
    ],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.(es6|js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
          ,
              {
                  test: /\.css/,
                  include: [
                      path.resolve(__dirname, "client/app")
                  ],
                  loader : 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!cssnext-loader'
              }
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};