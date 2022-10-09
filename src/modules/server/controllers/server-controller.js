const packageJson = require('../../../../package.json');
const { logConst } = require('../../../constants');
const { createErrorResponse } = require('../../../utils/response');
const serverLogger = require('../server-logger');

const serverVersion = async (req, res) => {
  try {
    return res.send({ version: packageJson.version });
  } catch (error) {
    serverLogger(`${logConst.LOG_ERROR} CONTROLLER > SERVER VERSION > ${error}`, req.ctx, 'error');
    return createErrorResponse({ message: error.message }, res);
  }
};

module.exports = {
  serverVersion,
};
