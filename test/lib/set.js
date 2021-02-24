const { test } = require('tap')
const requireInject = require('require-inject')

let configArgs = null
const npm = {
  commands: {
    config: (args, cb) => {
      configArgs = args
      return cb()
    },
  },
}

const Set = requireInject('../../lib/set.js')
const set = new Set(npm)

test('npm set - no args', t => {
  return set.exec([], (err) => {
    t.match(err, /npm set/, 'prints usage')
    t.end()
  })
})

test('npm set', t => {
  return set.exec(['email', 'me@me.me'], (err) => {
    if (err)
      throw err

    t.strictSame(configArgs, ['set', 'email', 'me@me.me'], 'passed the correct arguments to config')
    t.end()
  })
})
