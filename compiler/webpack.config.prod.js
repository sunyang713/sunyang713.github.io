var { resolve } = require('path')
var webpack = require('webpack')
var HtmlPlugin = require('html-webpack-plugin')
var CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  plugins: [
    new HtmlPlugin({
      template: resolve('compiler', 'template.prod.ejs'),
      inject: false
    }),
    new HtmlPlugin({
      filename: '404.html',
      template: resolve('compiler', 'template.prod.ejs'),
      inject: false
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin()
  ]
}
