const { usage } = require('./ls.js')
const completion = require('./utils/completion/installed-deep.js')

class LL {
  constructor (npm) {
    this.npm = npm
  }

  get usage () {
    return usage
  }

  async completion (opts) {
    return completion(this.npm, opts)
  }

  exec (args, cb) {
    this.npm.config.set('long', true)
    return this.npm.commands.ls(args, cb)
  }
}

module.exports = LL
