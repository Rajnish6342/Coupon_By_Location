require('dotenv').config({ path: '../../.env' });

module.exports = {
  port: process.env.PORT || 3000,
  mongodbUrl: process.env.MONGODB_DATABASE_URL || 'mongodb://localhost:27017/coupon',
  queryPageMaxCount: process.env.QUERY_PAGE_MAX_COUNT || 10,
};
