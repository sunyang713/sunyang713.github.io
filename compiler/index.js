var webpackMerge = require('webpack-merge')
var baseConfig = require('./webpack.config.base')

module.exports = env => {
  env = env ? JSON.parse(env) : {}
  return webpackMerge.smart(baseConfig(env), process.env.NODE_ENV === 'production' ?
    require('./webpack.config.prod')
  : require('./webpack.config.devo')
  )
}
