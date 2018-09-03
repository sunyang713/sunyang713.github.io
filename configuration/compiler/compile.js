#!/usr/bin/env node

// compiler.plugin('done', stats => {
//     const mainAssetName = stats.toJson().assetsByChunkName.main
//     const integrity = stats.compilation.assets[mainAssetName].integrity
// })


var webpack = require('webpack')

function compile(config) {
  let compiler = webpack(config)

  // Webpack v4
  compiler.hooks.beforeCompile.tap('WebpackInfo', compilation => {
    console.log('\n\tCompilation starting . . .\t\n')
  })

  compiler.hooks.afterCompile.tap('WebpackInfo', compilation => {
    console.log('\n\tCompilation finished\t\n')
  })


  const a = new Promise(compileAppForWeb)

  const b = new Promise(compileStylesForWeb)

  const c = new Promise(compileAppForNode)

  // fuarck!!!
  const values = await Promise.all([
    a,
    b,
    c,
    d
  ]).then(
    // Generate HTML page.
  )

  // do stuff with values = [ appCompilation, styleCompilation, imagecomiplation, somethingComiplation ]






  compiler.run()

}

module.exports = compile
