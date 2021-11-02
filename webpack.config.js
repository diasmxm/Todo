const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: 'development',
  entry: './src/code.js',
  devServer: {
    static: {
      directory: path.join(__dirname, '../todo'),
    },
    compress: true,
    port: 5000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};