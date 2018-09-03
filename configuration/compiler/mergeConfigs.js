var merge = require('webpack-merge')

/*
 * Returns a single config
 */
module.exports = function mergeConfigs(env, ...configs) {
  return merge(configs.map(config => config(env)))
}
