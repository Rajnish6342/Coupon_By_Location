
const httpStatus = require('http-status');

const { msgConst, logConst } = require('../../../../constants');
const { generateJsonResponse, createErrorResponse } = require('../../../../utils/response');
const couponLogger = require('../coupon-logger');

const { getCoupons } = require('../services/coupons');

const coupons = async (req, res) => {
  const { ctx } = req;
  try {
    const couponsData = await getCoupons(req);
    const response = generateJsonResponse(couponsData, httpStatus.OK, msgConst.COUPONS_FETCHED_SUCCESSFULLY);
    return res.send(response);
  } catch (error) {
    couponLogger(`${logConst.LOG_ERROR} CONTROLLER > LISTING LEAD > ${error}`, ctx, 'error');
    return createErrorResponse({ message: error.message }, res);
  }
};

module.exports = { coupons };
