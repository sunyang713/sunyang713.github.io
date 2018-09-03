var { resolve } = require('path')
var webpack = require('webpack')
var CopyAssetsPlugin = require('copy-webpack-plugin')

// worry about locale later
module.exports = {

  name: 'client',

  target: 'web',

  plugins: [

    // Copy static assets to the output.
    // new CopyAssetsPlugin([{
    //   from: resolve('src', 'assets')
    // }]),

    // new I18nPlugin(localisations[locale])

  ]

}
