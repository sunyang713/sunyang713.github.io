var { resolve } = require('path')
var webpack = require('webpack')
var ChunkHashPlugin = require('webpack-chunk-hash')
var RuntimeManifestHtmlPlugin = require('inline-manifest-webpack-plugin')
var ChunkManifestHtmlPlugin = require('chunk-manifest-webpack-plugin')
var CopyAssetsPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('src'),
  entry: '.',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: process.env.BUILD_PATH && resolve(process.env.BUILD_PATH),
    publicPath: process.env.PUBLIC_PATH
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader',
            publicPath: '../' // fuck you sokra https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27
          })
        }
      }
    }, {
      enforce: 'pre',
      test: /\.js$|\.vue$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'file-loader',
      options: { name: 'images/[hash].[ext]' }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [

    // Replace the standard webpack chunkhash with md5.
    new ChunkHashPlugin(),

    // Inject environment variables.
    new webpack.EnvironmentPlugin({
      NODE_ENV: null,
      PUBLIC_PATH: null
    }),

    // Inject application variables.
    new webpack.EnvironmentPlugin(env),

    // Implicit Common Vendor Chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),

    // Separate webpack runtime manifest into its own chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    // Export the webpack runtime manifest.
    new RuntimeManifestHtmlPlugin({
      name: 'webpackRuntimeManifest'
    }),

    // Export the webpack chunk manifest.
    new ChunkManifestHtmlPlugin({
      manifestVariable: 'webpackChunkManifest',
      inlineManifest: true
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/120
    }),

    new CopyAssetsPlugin([{
      from: resolve('assets')
    }]),
  ]
})
