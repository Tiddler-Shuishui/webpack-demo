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
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};