const express = require('express');

const { urlConst } = require('../../constants');

const couponRoutes = require('./coupon/routes/coupon-routes');

const app = express();

app.use(urlConst.API_PREFIX_COUPON_MODULE, couponRoutes);

module.exports = app;
