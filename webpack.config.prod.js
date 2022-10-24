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
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader",
        ],
      },
    ],
  },
};