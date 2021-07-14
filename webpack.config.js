const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
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
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
      // {
      //   test: /\.html/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'static/[hash][ext][query]',
      //   },
      // },
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
    new HtmlPlugin({
      template: './src/html/index.html',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  devServer: {
    host: 'localhost',
  },
};
