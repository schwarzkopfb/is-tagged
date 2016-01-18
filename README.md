[![view on npm](http://img.shields.io/npm/v/is-tagged.svg)](https://www.npmjs.com/package/is-tagged)
[![npm module downloads per month](http://img.shields.io/npm/dm/is-tagged.svg)](https://www.npmjs.com/package/is-tagged)
[![Build Status](https://travis-ci.org/schwarzkopfb/is-tagged.svg?branch=master)](https://travis-ci.org/schwarzkopfb/is-tagged)
[![Coverage Status](https://coveralls.io/repos/github/schwarzkopfb/is-tagged/badge.svg?branch=master)](https://coveralls.io/github/schwarzkopfb/is-tagged?branch=master)

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