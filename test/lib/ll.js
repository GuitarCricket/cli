const t = require('tap')
const configs = {}
let lsCalled = false
const LL = require('../../lib/ll.js')
const ll = new LL({
  config: {
    set: (k, v) => {
      configs[k] = v
    },
  },
  commands: {
    ls: (args, cb) => {
      lsCalled = true
      cb()
    },
  },
})

const ls = require('../../lib/ls.js')
const { usage } = ls
t.test('the ll command', t => {
  t.equal(ll.usage, usage)
  ll.exec([], () => {
    t.equal(lsCalled, true)
    t.strictSame(configs, { long: true })
    t.end()
  })
})
