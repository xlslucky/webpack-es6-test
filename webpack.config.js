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
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    // 声明一个外部依赖
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
  },
  resolve: {
  // 文件扩展名，写明以后就不需要每个文件写后缀
    extensions: ['.js', '.css', '.json'],
  // 路径别名，比如这里可以使用 css 指向 static/css 路径
    alias: {
      '@': __dirname + '/src',
      'css': __dirname + '/assets/css'
    }
  },
  plugins: [
    // 压缩js代码 加入了这个插件之后，编译的速度会明显变慢，所以一般只在生产环境启用。
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
