/* eslint-disable consistent-return */
const config = require('../config/config');
const { msgConst } = require('../constants');
const { createErrorResponse } = require('../utils/response');

const limitRecord = (req, res, next) => {
  if (req?.query?.limit <= 0) {
    return createErrorResponse({ message: msgConst.INVALID_REQUEST }, res);
  }
  const { queryPageMaxCount } = config;
  if (req.query.limit > queryPageMaxCount) {
    req.query.limit = queryPageMaxCount;
  }
  next();
};

module.exports = limitRecord;
