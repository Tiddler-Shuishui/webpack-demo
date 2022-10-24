const base = require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'development',
  plugins: [...base.plugins],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};