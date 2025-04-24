const webpack = require('webpack');

module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        postcssLoaderOptions.postcssOptions = {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        };
        return postcssLoaderOptions;
      },
    },
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: false,
          stream: false,
          util: false,
          buffer: false,
          asset: false,
          fs: false,
          path: false,
          crypto: false,
          zlib: false
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser'
        })
      ]
    }
  }
};
