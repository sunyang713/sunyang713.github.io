var { resolve } = require('path')
var webpack = require('webpack')
var ChunkHashPlugin = require('webpack-chunk-hash')
// TODO : DLL, autodll-webpack-plugin ?
module.exports = {

  name: 'library', // + locale

  // mode: 'none',

  // target: 'node',

  // context: resolve('src'),
  context: process.cwd(),

  entry: {
    vendor: [
      'react',
      'react-dom',
      'redux'
    ],
  },

  output: {
    filename: '[name].[hash].dll.js',
    path: resolve('dist'),
    library: '[name]_[hash]' // TODO config this to a variable DLLName, keep in sync here and the DllPlugin
  },

  plugins: [

    // Clean the build directory.
    // new CleanWebpackPlugin([resolve('dist', 'static', 'vendor manifest???')]),

    // Extract and log compilation progress.
    new webpack.ProgressPlugin(),

    // Replace the standard webpack chunkhash with md5.
    new ChunkHashPlugin(),

    // Inject environment variables.
    new webpack.EnvironmentPlugin({
      NODE_ENV: null
    }),

    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: resolve('dist', '[name]-manifest.json') // todo config the outputpath and this dll name
    })

  ]

}
