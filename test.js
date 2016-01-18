/**
 * Created by schwarzkopfb on 16/1/18.
 */

'use strict'

const assert   = require('assert'),
      equal    = assert.equal,
      isTagged = require('./')

function test() {
    return isTagged(arguments)
}

assert(isTagged instanceof Function, 'module.exports should be a function')
equal(isTagged(), false, 'isTagged(undefined) should return false')
equal(isTagged(null), false, 'isTagged(null) should return false')
equal(isTagged(test), false, 'isTagged(test) should return false')
equal(isTagged(false), false, 'isTagged(false) should return false')
equal(isTagged(true), false, 'isTagged(true) should return false')
equal(isTagged(1), false, 'isTagged(1) should return false')
equal(isTagged('a'), false, 'isTagged(\'a\') should return false')
equal(isTagged([ 1 ]), false, 'isTagged([ 1 ]) should return false')
equal(isTagged({ a: 1 }), false, 'isTagged({ a: 1 }) should return false')
equal(test(), false, 'test() should return false')
equal(test`tagged`, true, 'test`tagged` should return true')

console.log('ok')
