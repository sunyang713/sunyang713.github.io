var { resolve } = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ChunkHashPlugin = require('webpack-chunk-hash')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyAssetsPlugin = require('copy-webpack-plugin')

// var I18nPlugin = require('i18n-webpack-plugin')
// var localisations = require('localisations')

// worry about locale later
module.exports = ({ page = null }) => ({

  target: 'none', // should error

  context: resolve('src', 'pages', page), // not quite right..

  // entry: 'client/main',

  output: {
    filename: 'js/[name].[chunkhash].js',
    path: resolve('dist', 'static', page), // config this
    publicPath: process.env.PUBLIC_PATH,
    crossOriginLoading: 'use-credentials'
  },

  module: {
    rules: [{
    //   enforce: 'pre',
    //   test: /\.js$/,
    //   loader: 'eslint-loader',
    //   options: { eslintPath: resolve('configuration', '.eslintrc') },
    //   exclude: /node_modules/
    // }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(gif|png|jpe?g|svg|ttf|otf|eot|woff2?)$/i,
      loader: 'url-loader',
      options: { limit: 8192 } // bytes - max size of network packet.
    }, {
 
    // }, {
    //   test: /\.(gif|png|jpe?g|svg)$/i,
    //   loader: 'file-loader',
    //   options: { name: 'images/[hash].[ext]' }
    // }, {
 
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'responsive-loader',
      options: {
        name: 'images/[hash].[ext]',
        sizes: [ 576, 768, 992, 1200 ],
        // [ 100, 200, 300 ],
        // [ 576, 768, 992, 1200],
        // [ 500, '50vw', '100vw' ],
        // [ 400px, 550px, 750px, 1000px, 1200] 1140
        placeholder: true, 
        // mimetype: 'application/font-woff', // Set mimetype
        adapter: require('responsive-loader/sharp'),
        disable: process.env.NODE_ENV !== 'production'
      }
    }, {
      test: /\.(ttf|otf|eot|woff2?)$/i,
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]',
        mimetype: 'application/font-woff', // Set mimetype
      }
    }]
  },

  resolve: {
    alias: {
      @utils: resolve('src', 'core', 'utils'), // TODO config this
    }
    modules: [ resolve('src', 'pages', page), 'node_modules' ]
  },

  plugins: [

    // Clean the build directory.
    // new CleanWebpackPlugin([resolve('dist', 'static')]),

    // Extract and log compilation progress.
    // new webpack.ProgressPlugin(),

    // Replace the standard webpack chunkhash with md5.
    new ChunkHashPlugin(),

    // Inject environment variables.
    new webpack.EnvironmentPlugin({
      // NODE_ENV: null,
      PUBLIC_PATH: null,
      LOCALE: null
    }),

    // // Inject secret application variables.
    // new webpack.EnvironmentPlugin(secrets),

    // new webpack.DllReferencePlugin({
    //   manifest: require(resolve('dist', 'vendor-manifest.json')) // TODO config this json name.
    // }),

    // new I18nPlugin(localisations[locale])

  ]

})
