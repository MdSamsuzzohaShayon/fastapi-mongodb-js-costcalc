const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    })
);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].bundle.js', // https://webpack.js.org/guides/caching/
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'img/[name]-[contenthash][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
  ].concat(multipleHtmlPlugins),

  // npm install --save-dev css-loader
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          // MiniCssExtractPlugin.loader,// STEP 3. INJECT INTO DOM
          'style-loader', // STEP 3. INJECT INTO DOM
          'css-loader', // STEP 2. TURN CSS INTO COMMON JS
          'sass-loader', // STEP 1. TURNS SASS INTO CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[hash][ext][query]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[hash][ext][query]',
        },
      },
    ],
  },
});