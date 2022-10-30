const path = require('path');
module.exports = {
  mode: 'development',
  target: 'electron-main',
  resolve: {
    extensions: ['ts'],
  },
  entry: {
    main: path.resolve(__dirname, '/src/main/main.ts'),
    preload: path.resolve(__dirname, '/src/main/preload.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
