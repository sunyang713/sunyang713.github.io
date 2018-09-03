var mergeConfigs = require('../mergeConfigs')
var baseConfig = require('./base.base.webpack.config')

module.exports = env => mergeConfigs(env,
  baseConfig,
  process.env.NODE_ENV === 'production' ?
    require('./base.prod.webpack.config')
  : require('./base.devo.webpack.config')
)
