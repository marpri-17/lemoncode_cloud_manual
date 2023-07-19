const { merge } = require('webpack-merge');
const base = require('./base');
const helpers = require('./helpers');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: './js/[name].[chunkhash].js',
    assetModuleFilename: "./images/[hash][ext][query]",
  },

  plugins: [
    new Dotenv({
      path: 'prod.env',
    }),
  ],
});

