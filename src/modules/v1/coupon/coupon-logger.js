const winston = require('winston');

const { defaultLoggerConfig } = require('../../../logger');

const couponLoggerInstance = winston.createLogger({
  ...defaultLoggerConfig,
  defaultMeta: {
    service: 'coupon',
  },
});

const couponLogger = (message, ctx, level = 'info') => {
  // eslint-disable-next-line security/detect-object-injection
  couponLoggerInstance.child({
    requestId: ctx?.requestId,
    reqIp: ctx?.reqIp,
  })[level](message);
};

module.exports = couponLogger;
