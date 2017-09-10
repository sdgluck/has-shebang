'use strict'

const fs = require('fs')
const assert = require('argsy')
const isFile = require('is-file')

module.exports = function hasShebang (input) {
  assert.str(input, 'input')

  if (isFile.sync(input)) {
    const buff = new Buffer(2)
    const fh = fs.openSync(input, 'r')
    fs.readSync(fh, buff, 0, 2)
    input = buff.toString('utf8', 0)
  }

  return input.indexOf('#!') === 0
}
