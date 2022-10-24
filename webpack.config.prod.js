const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  ...base,
  mode: 'production',
  plugins: [...base.plugins,
  new MiniCssExtractPlugin({
    filename:'[name].[contenthash].css'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
};