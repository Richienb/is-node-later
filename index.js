"use strict"

const semver = require("semver")
const cleanSemver = require("clean-semver")

module.exports = (minimumVersion) => semver.satisfies(cleanSemver(process.version), minimumVersion)
