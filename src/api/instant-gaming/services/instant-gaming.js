'use strict';

/**
 * instant-gaming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instant-gaming.instant-gaming');
