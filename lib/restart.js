const LifecycleCmd = require('./utils/lifecycle-cmd.js')

class Restart extends LifecycleCmd {
  constructor (npm) {
    super(npm, 'restart')
  }
}
module.exports = Restart
