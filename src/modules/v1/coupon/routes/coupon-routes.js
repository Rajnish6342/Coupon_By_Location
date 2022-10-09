const express = require('express');

const validate = require('../../../../middlewares/validate');
const { couponValidations } = require('../../../../utils/validations');
const couponController = require('../controllers');

const router = express.Router();

router.get('/', validate(couponValidations.listCoupon), couponController.coupons);

module.exports = router;
