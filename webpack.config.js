module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
};