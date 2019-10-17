"use strict"

const semver = require("semver")
const currentVersion = semver.clean(process.version)

module.exports = (minimumVersion) => semver.satisfies(currentVersion, minimumVersion)
