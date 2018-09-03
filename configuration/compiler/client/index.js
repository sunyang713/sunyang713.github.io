var merge = require('webpack-merge')
var baseConfig = require('../base.webpack.config')
var clientBaseConfig = require('./client.base.webpack.config')

configs = [baseConfig, clientBaseConfig].map(config => config(env))

module.exports = merge(...[
  baseConfig,
  clientBaseConfig,
  process.env.NODE_ENV === 'production' ?
    require('./client.prod.webpack.config')
  : require('./client.devo.webpack.config')
].map(config => config(env)))
