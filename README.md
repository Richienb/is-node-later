# Is Node Later [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-node-later/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-node-later)

Check if the NodeJS version satisfies the required version.

[![NPM Badge](https://nodei.co/npm/is-node-later.png)](https://npmjs.com/package/is-node-later)

## Install

```sh
npm install is-node-later
```

## Usage

```js
const isNodeLater = require("is-node-later");

isNodeLater(">=10.0.0");
//=> true
```

## API

### isNodeLater(minimumVersion)

#### minimumVersion

Type: `number`

Check if the NodeJS version satisfies the required version.
