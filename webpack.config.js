const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true, // 재빌드 시, 필요없는 파일들 제거
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  devServer: {
    host: 'localhost',
  },
};
