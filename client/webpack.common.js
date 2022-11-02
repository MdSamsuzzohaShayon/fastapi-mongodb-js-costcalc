// MULTIPLE PAGE
// const htmlPageNames = ['dashboard', 'tos', 'payment', 'invoice', 'contact']; // Use same array in other webpack file

const entryObject = {};
entryObject.index = ['./src/js/index.js', './src/sass/index.scss'];

// No more pages
// htmlPageNames.forEach((name) => {
//   entryObject[name] = [`./src/js/${name}.js`, `./src/scss/${name}.scss`];
// });

module.exports = {
  entry: entryObject,
  // npm install --save-dev css-loader
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader', // html-loader Exports HTML as string, require references to static resources
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              '...',
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src',
              },
              {
                tag: 'img',
                attribute: 'data-srcset',
                type: 'srcset',
              },
            ],
            urlFilter: (attribute, value) => {
              // The `attribute` argument contains a name of the HTML attribute.
              // The `value` argument contains a value of the HTML attribute.
              // The `resourcePath` argument contains a path to the loaded HTML file.

              if (/example\.svg$/.test(value)) {
                return false;
              }

              return true;
            },
          },
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //         outputPath: 'img',
      //       },
      //     },
      //   ],
      // },
    ],
  },

};