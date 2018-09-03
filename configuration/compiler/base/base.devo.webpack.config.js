var { resolve } = require('path')
var webpack = require('webpack')

module.exports = env => ({

  name: 'devo',

  mode: 'development',

  output: {
    filename: 'js/[name].[hash].js'
  },

  plugins: [

    // devo favicon

  ],

})
