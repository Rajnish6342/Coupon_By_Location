const createCoupons = require('./create-coupons');

const bootFiles = async () => {
  await createCoupons();
};

module.exports = bootFiles;
