const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.vue', '.css']
  },
  devServer: {
    contentBase: 'dist',
    port: 8080
  },
  mode: 'production',
};