const LifecycleCmd = require('./utils/lifecycle-cmd.js')

class Start extends LifecycleCmd {
  constructor (npm) {
    super(npm, 'start')
  }
}
module.exports = Start
