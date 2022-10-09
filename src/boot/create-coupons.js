/* eslint-disable no-process-exit */
const { logConst } = require('../constants');
const { logger } = require('../logger');
const models = require('../models');

const couponsData = require('./data/coupons.json');

const seedData = async () => {
  try {
    const {
      CouponModel,
    } = models;

    await CouponModel.deleteMany({});

    await CouponModel.insertMany(couponsData);

    logger.info(`${logConst.LOG_SUCCESS} DUMMY DATA ADDED SUCCESSFULLY`);

    return true;
  } catch (error) {
    logger.error(`${logConst.LOG_ERROR} ERROR AT SEEDING DATA`, error);
    throw error;
  }
};

module.exports = seedData;
