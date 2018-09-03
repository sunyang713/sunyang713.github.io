var fs = require('fs')
var ini = require('ini')

module.exports = {
  babel: require('./.babelrc')
  eslint: require('./.eslintrc')
  postcss: require('./.postcssrc')

  globals: ini.parse(fs.readFileSync('./.globals', 'utf-8'))
  secrets: ini.parse(fs.readFileSync('./.secrets', 'utf-8'))
}
