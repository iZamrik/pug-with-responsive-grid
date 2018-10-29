let mix = require('laravel-mix');
let webpack = require("webpack");

mix.options({
  processCssUrls: false
});

mix.webpackConfig({
  entry: {
    vendor: ["axios", "lodash"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["commons", "vendor"],
      filename: "build/static/js/[name].js",
      minChunks: 2
    })
  ]
});

mix.js('src/static/js/app.js', 'build/static/js');
