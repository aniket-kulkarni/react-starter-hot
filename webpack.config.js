var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    '../client/app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css', {
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test : /\.(es6|js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'client')
    },
    {
        test: /\.css/,
        include: [
            path.resolve(__dirname, "client/app")
        ],
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!cssnext-loader')
    },
    {
        test: /\.css/,                
        exclude: [
            path.resolve(__dirname, "client")
        ],
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
        test: /\.css/,                
        include: [
            path.resolve(__dirname, "client/styles"),            
        ],
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
    }]
  },
  resolve : {
      extensions : ['','.js','.es6','.jsx']
  }
};
