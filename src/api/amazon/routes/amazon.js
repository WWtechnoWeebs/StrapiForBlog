'use strict';

/**
 * amazon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::amazon.amazon');
