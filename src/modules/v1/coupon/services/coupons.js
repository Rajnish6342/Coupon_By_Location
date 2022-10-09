const { logConst } = require('../../../../constants');
const models = require('../../../../models');
const couponLogger = require('../coupon-logger');

const getCoupons = async req => {
  try {
    const { CouponModel } = models;
    const {
      lat, long, range, limit, offset,
    } = req.query;

    // Conversion of km into meter
    const rangeInMeter = range * 1000;

    const findQuery = {
      location: {
        $near:
        {
          $geometry: { type: 'Point', coordinates: [lat, long] },
          $minDistance: 0,
          $maxDistance: rangeInMeter,
        },
      },
      expiryDate: { $gte: new Date() },
    };

    const [count, coupons] = await Promise.all([
      CouponModel.count(findQuery),
      CouponModel.find(findQuery).skip(offset).limit(limit),
    ]);

    return {
      count,
      coupons,
    };
  } catch (error) {
    couponLogger(`${logConst.LOG_ERROR} SERVICES > GET COUPONS > ${error}`, req.ctx, 'error');
    throw error;
  }
};

module.exports = {
  getCoupons,
};
