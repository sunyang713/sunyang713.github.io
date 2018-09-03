var webpack = require('webpack')
var SubResourceIntegrityPlugin = require('webpack-subresource-integrity')
// var CompressionPlugin = require('compression-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var HtmlPlugin = require('html-webpack-plugin')

module.exports = env => ({

  // Configuration name.
  name: 'prod',

  // Configuration mode.
  mode: 'production',

  plugins: [
    // new webpack.NormalModuleReplacementPlugin(/\(NODE_ENV\)/, resource => resource.request.replace(/NODE_ENV/, 'prod')),
    // new webpack.optimize.ModuleConcatenationPlugin()

    // may or may not be needed?
    new webpack.HashedModuleIdsPlugin(),

    // new CompressionPlugin()
    // new FaviconsWebpackPlugin(resolve('src', 'assets', 'icon.png')),

  ]

})
