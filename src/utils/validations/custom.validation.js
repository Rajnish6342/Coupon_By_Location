const { msgConst } = require('../../constants');

const isLatitude = (value, helpers) => {
  if (!(Number.isFinite(value) && Math.abs(value) <= 90)) {
    return helpers.message(msgConst.INVALID_LATITUDE);
  }
  return value;
};

const isLongitude = (value, helpers) => {
  if (!(Number.isFinite(value) && Math.abs(value) <= 180)) {
    return helpers.message(msgConst.INVALID_LONGITUDE);
  }
  return value;
};

module.exports = {
  isLatitude,
  isLongitude,
};
