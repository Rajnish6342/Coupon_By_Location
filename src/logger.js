const winston = require('winston');

const { format, transports } = winston;

const defaultLoggerConfig = {
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint(),
  ),
  transports: [
    new transports.Console(),
  ],
};

const logger = winston.createLogger({
  ...defaultLoggerConfig,
  defaultMeta: {
    service: 'default-logger',
  },
});

const defaultLogger = (message, ctx, level = 'info') => {
  // eslint-disable-next-line security/detect-object-injection
  logger.child({
    requestId: ctx?.requestId,
    reqIp: ctx?.reqIp,
    tenantId: ctx?.tenantId,
    clientName: ctx?.clientName,
  })[level](message);
};

module.exports = defaultLogger;
module.exports.logger = logger;
module.exports.defaultLoggerConfig = defaultLoggerConfig;
