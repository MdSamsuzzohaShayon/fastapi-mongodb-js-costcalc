const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// https://www.youtube.com/watch?v=2L8HceLRGf4

// MULTIPLE PAGE
const htmlPageNames = ['dashboard'];
const multipleHtmlPlugins = htmlPageNames.map(
  (name) =>
    new HtmlWebpackPlugin({
      template: `./src/${name}.html`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
      chunks: [`${name}`], // respective JS files
      // inject: true
      // removeAttributeQuotes: true,
      removeComments: true,
      collapseWhitespace: true,
    })
);

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].min.js', // https://webpack.js.org/guides/caching/
    // chunkFilename: '[id].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'img/[hash][ext][query]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  optimization: {
    // Allows you to override the default minimizer by providing a different one or more customized TerserPlugin instances.
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html', // https://github.com/jantimon/html-webpack-plugin#options
        filename: `index.html`, // output HTML files
        chunks: [`index`], // respective JS files
        // removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: false,
      }),
    ].concat(multipleHtmlPlugins),
  },

  // npm install --save-dev css-loader
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          // MiniCssExtractPlugin.loader,// STEP 3. INJECT INTO DOM
          MiniCssExtractPlugin.loader, // STEP 3. INJECT INTO DOM
          'css-loader', // STEP 2. TURN CSS INTO COMMON JS
          'sass-loader', // STEP 1. TURNS SASS INTO CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]',
        },
      }
    ],
  },
});