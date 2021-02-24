const usageUtil = require('./utils/usage.js')

class Get {
  constructor (npm) {
    this.npm = npm
  }

  get usage () {
    return usageUtil(
      'get',
      'npm get [<key> ...] (See `npm config`)'
    )
  }

  async completion (opts) {
    return this.npm.commands.config.completion(opts)
  }

  exec (args, cb) {
    this.npm.commands.config(['get'].concat(args), cb)
  }
}
module.exports = Get
