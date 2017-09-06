var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src',
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
        exclude: /node_modules/,
        use: ['babel-loader'],
        /*use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }*/
      }
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
  },
  plugins: [
    // 加入了这个插件之后，编译的速度会明显变慢，所以一般只在生产环境启用。
    // warnings: false默认false
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin('common')
  ]
}
