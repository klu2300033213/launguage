const path = require('path'); // Ensure semicolon is here
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Ensure semicolon is here

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Ensure semicolon is here
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', // Ensure semicolon is here
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Ensure semicolon is here
        },
      },
    ],
  },
  devtool: 'source-map', // Optional configuration
};
