var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: './app',
  output: {
    path: __dirname + '/dist/',
    filename: 'build.js'
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
    'jquery': 'jquery'
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
}
