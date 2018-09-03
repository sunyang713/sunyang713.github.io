// const l18n = [
//   'en-US',
//   'zh-CN'
// ].reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue]: require(`./${currentValue}` })))


// should loclaes be maintained by some super central package?

module.exports = {
  'en-US': require('./en-US'),
  'zh-CN': require('./zh-CN')
}
