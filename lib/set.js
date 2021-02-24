const usageUtil = require('./utils/usage.js')

class Set {
  constructor (npm) {
    this.npm = npm
  }

  get usage () {
    return usageUtil(
      'set',
      'npm set <key>=<value> [<key>=<value> ...] (See `npm config`)'
    )
  }

  async completion (opts) {
    return this.npm.commands.config.completion(opts)
  }

  exec (args, cb) {
    this.npm.commands.config(['get'].concat(args), cb)
  }
}
module.exports = Set
