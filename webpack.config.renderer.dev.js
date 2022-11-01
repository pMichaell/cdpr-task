const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      assets: path.join(__dirname, 'assets'),
    },
  },
  entry: path.resolve(__dirname, 'src', 'renderer', 'index.tsx'),
  output: {
    filename: 'index.[contenthash].js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // Open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.[jt]sx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                // eslint-disable-next-line new-cap
                before: [ReactRefreshTypeScript()],
              }),
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typescript React App',
      filename: 'index.html',
      template: 'src/renderer/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
