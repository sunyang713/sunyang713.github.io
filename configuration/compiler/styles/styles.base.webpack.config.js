var { resolve } = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ChunkHashPlugin = require('webpack-chunk-hash')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyAssetsPlugin = require('copy-webpack-plugin')

// var RuntimeManifestPlugin = require('inline-manifest-webpack-plugin')
// var ChunkManifestPlugin = require('webpack-manifest-plugin');
// var I18nPlugin = require('i18n-webpack-plugin')
// var localisations = require('localisations')

module.exports = {

  name: 'styles', // + locale

  // mode: 'none',

  target: 'web',

  context: resolve('src'),

  entry: {
    styles: 'client/styles/main'
  },

  output: {
    filename: 'js/[name].[chunkhash].js',
    path: resolve('dist', 'static'),
    publicPath: process.env.PUBLIC_PATH,
    crossOriginLoading: 'use-credentials'
  },

  module: {
    rules: [{
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: resolve('configuration', '.postcssrc') } }
        }, {
          loader: 'resolve-url-loader',
          options: { sourceMap: true }
        }, {
          loader: 'stylus-loader',
          options: { sourceMap: true }
        }]
      })
    }, {
    //   test: /\.css$/,
    //   loaders: [
    //     'style-loader',
    //     'css-loader',
    //     'postcss-loader',
    //     // 'resolve-url-loader'
    //   ]
    // }, {
      test: /\.(gif|png|jpe?g|svg|ttf|otf|eot|woff2?)$/i,
      loader: 'url-loader',
      options: { limit: 8192 } // bytes - max size of network packet.
    }, {
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
        adapter: require('responsive-loader/sharp')
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
    extensions: [ '.styl' ],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [

    // Clean the build directory.
    new CleanWebpackPlugin([resolve('dist', 'static')]),

    // Extract and log compilation progress.
    new webpack.ProgressPlugin(),

    // Replace the standard webpack chunkhash with md5.
    new ChunkHashPlugin(),

    // Inject environment variables.
    new webpack.EnvironmentPlugin({
      NODE_ENV: null,
      PUBLIC_PATH: null,
      LOCALE: null
    }),

    // Extract CSS to a stylesheet.
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production'
    }),


  ]

}
