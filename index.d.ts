/**
 * Check if the NodeJS version satisfies the required version.
 * @param minimumVersion The minimum version to check.
 * @example
 * ```
 * const isNodeLater = require("is-node-later");
 * isNodeLater(">=10.0.0");
 * //=> true
 * ```
*/
declare function isNodeLater(minimumVersion: string): boolean;

export = isNodeLater;
