const LifecycleCmd = require('./utils/lifecycle-cmd.js')

class Stop extends LifecycleCmd {
  constructor (npm) {
    super(npm, 'stop')
  }
}
module.exports = Stop
