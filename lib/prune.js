// prune extraneous packages
const npm = require('./npm.js')
const Arborist = require('@npmcli/arborist')
const usageUtil = require('./utils/usage.js')
const reifyFinish = require('./utils/reify-finish.js')

class Prune {
  constructor (npm) {
    this.npm = npm
  }

  get usage () {
    return usageUtil('prune',
      'npm prune [[<@scope>/]<pkg>...] [--production]'
    )
  }

  exec (args, cb) {
    this.prune().then(() => cb()).catch(cb)
  }

  async prune () {
    const where = this.npm.prefix
    const arb = new Arborist({
      ...this.npm.flatOptions,
      path: where,
    })
    await arb.prune(npm.flatOptions)
    await reifyFinish(this.npm, arb)
  }
}
module.exports = Prune
