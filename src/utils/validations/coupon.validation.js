const Joi = require('joi');

const { isLatitude, isLongitude } = require('./custom.validation');

const listCoupon = {
  query: Joi.object().keys({
    lat: Joi.number().required().custom(isLatitude),
    long: Joi.number().required().custom(isLongitude),
    range: Joi.number().greater(-1).default(3),
    limit: Joi.number().default(10),
    offset: Joi.number().default(0),
  }),
};

module.exports = {
  listCoupon,
};
