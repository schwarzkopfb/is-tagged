/**
 * Created by schwarzkopfb on 16/1/18.
 */

'use strict'

function isTagged(args) {
    if(!args || typeof args !== 'object')
        return false

    const strings = args[ 0 ]

    return (
            strings &&
            Array.isArray(strings) &&
            Array.isArray(strings.raw) &&
            typeof strings[ 0 ]     === 'string' &&
            typeof strings.raw[ 0 ] === 'string'
        ) || false
}

module.exports = isTagged
