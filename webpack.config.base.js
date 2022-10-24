const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Custom template',
    // Load a custom template (lodash by default)
    template: 'index.html'
  })],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};