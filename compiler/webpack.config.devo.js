var { resolve } = require('path')
var webpack = require('webpack')
var HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'js/[name].[hash].js',
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
    // secure: true,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlPlugin({
      template: resolve('compiler', 'template.devo.ejs'),
      inject: false
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
