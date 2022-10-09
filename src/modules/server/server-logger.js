const winston = require('winston');

const { defaultLoggerConfig } = require('../../logger');

const serverLoggerInstance = winston.createLogger({
  ...defaultLoggerConfig,
  defaultMeta: {
    service: 'server',
  },
});

const serverLogger = (message, ctx, level = 'info') => {
  // eslint-disable-next-line security/detect-object-injection
  serverLoggerInstance.child({
    requestId: ctx?.requestId,
    reqIp: ctx?.reqIp,
  })[level](message);
};

module.exports = serverLogger;
