const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A coupon must have a name'],
      unique: true,
      trim: true,
      maxlength: [25, 'A coupon name must have less or equal then 10 characters'],
      minlength: [4, 'A coupon name must have more or equal then 4 characters'],
    },
    description: {
      type: String,
      trim: true,
    },
    expiryDate: Date,
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);

couponSchema.index({ location: '2dsphere' });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
