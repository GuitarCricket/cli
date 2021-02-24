const output = require('./utils/output.js')
const usageUtil = require('./utils/usage.js')

class Prefix {
  constructor (npm) {
    this.npm = npm
  }

  get usage () {
    return usageUtil('prefix', 'npm prefix [-g]')
  }

  exec (args, cb) {
    this.prefix(args).then(() => cb()).catch(cb)
  }

  async prefix (args) {
    return output(this.npm.prefix)
  }
}
module.exports = Prefix
