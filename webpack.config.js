var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: './app',
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  module: {
    /*loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]*/
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"]
      }
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin('common')
    ]
}
