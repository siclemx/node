/**
 * @fileoverview Handle logging for ESLint
 * @author Gyandeep Singh
 */

"use strict";

/* eslint no-console: "off" */

/* istanbul ignore next */
module.exports = {

    /**
     * Cover for console.log
     * @returns {void}
     */
    info() {
        console.log.apply(console, arguments);
    },

    /**
     * Cover for console.error
     * @returns {void}
     */
    error() {
        console.error.apply(console, arguments);
    }
};
