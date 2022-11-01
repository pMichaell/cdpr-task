const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'electron-main',
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    nodeEnv: isDevelopment ? 'development' : 'production',
  },
  entry: {
    main: path.resolve(__dirname, 'src', 'main', 'main.ts'),
    preload: path.resolve(__dirname, 'src', 'main', 'preload.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'main'),
    clean: true,
  },
  devtool: 'source-map',
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
