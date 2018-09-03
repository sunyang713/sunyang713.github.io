var webpack = require('webpack')

module.exports = function compile(config) {
  let compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {

      if (error) {
        reject(error)
        console.error(error.stack || error)
        console.error(error.details || 'No error details')
        process.exit(1)
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        console.error(unescape(info.errors))
        process.exitCode = 2
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings)
      }

      console.info('Stats:', stats.toString({ colors: true }))

    })
  })
}


module.exports = function compilerCallback(resolve, reject)





const cb = 
