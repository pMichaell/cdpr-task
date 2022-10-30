const path = require('path');
module.exports = {
  mode: 'development',
  target: 'electron-main',
  resolve: {
    extensions: ['ts'],
  },
  entry: path.resolve(__dirname, '/src/main/main.ts'),
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
