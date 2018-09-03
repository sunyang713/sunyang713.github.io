var { resolve } = require('path')
var webpack = require('webpack')
var ChunkHashPlugin = require('webpack-chunk-hash')
var SubResourceIntegrityPlugin = require('webpack-subresource-integrity')
// var nodeExternals = require('webpack-node-externals')

module.exports = ({ page }) => ({
  name: `${ page }-server`,

  target: 'node',

  entry: 'server/main'

  output: {
    // filename: '[name].js',
    path: resolve('build', page), // config this
    publicPath: process.env.PUBLIC_PATH,
    crossOriginLoading: 'use-credentials',
    libraryTarget: 'commonjs2'
  },

  externals: /^[a-z\-0-9]+$/,
  // externals: [ nodeExternals() ],

// fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' })

  resolve: {
    alias: {
      @utils: resolve('src', 'core', 'utils'), // TODO config this
    }
    modules: [ resolve('src', 'pages', page), 'node_modules' ]
  },

  plugins: [
    // Calculate resource integrity attributes.
    new SubResourceIntegrityPlugin({
      hashFuncNames: [ 'sha256' ],
    }),
  ]

})

