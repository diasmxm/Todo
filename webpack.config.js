const path = require('path');

module.exports = {
  entry: './code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};