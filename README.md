[![view on npm](https://img.shields.io/npm/v/is-tagged.svg?style=flat-square)](https://www.npmjs.com/package/is-tagged)
[![npm module downloads per month](http://img.shields.io/npm/dm/is-tagged.svg?style=flat-square)](https://www.npmjs.com/package/is-tagged)
[![Build Status](https://img.shields.io/travis/schwarzkopfb/is-tagged.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/is-tagged)
[![Coverage Status](https://img.shields.io/coveralls/schwarzkopfb/is-tagged.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/is-tagged?branch=master)

# is-tagged

Check whether a function call is initiated by a tagged template string or invoked in a regular way

## Installation

```
npm install --save is-tagged
```

## Usage

```javascript
const isTagged = require('is-tagged')

function fn() {
    return isTagged(arguments)
}

fn('foo') // false
fn`bar` // true
```

## License

[MIT license](https://github.com/schwarzkopfb/is-tagged/blob/master/LICENSE).