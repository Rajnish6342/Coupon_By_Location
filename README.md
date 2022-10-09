# Coupon:

A API To fetch coupons based on latitude and longitude with a range in km

## Installation

You must have MongoDB and Nodejs >=14.16.0, and npm in your system to install the dependency and start this project

```bash
npm install
npm start
```
## Env
Please create a .env from the sample file .env-sample

## PostMan Collection
[Link](https://documenter.getpostman.com/view/14134431/2s83ziMiEq)

## Examples

[Coupons_NearBy_BizTechCS_With_Range_In_2km](http://localhost:3000/v1/coupons?lat=23.0116012&long=72.5129047&range=2&limit=15&offset=0)
[Coupons_NearBy_BizTechCS_With_Range_In_5km](http://localhost:3000/v1/coupons?lat=23.0116012&long=72.5129047&range=5&limit=15&offset=0)
[Coupons_NearBy_Surat_Bus_Stand_With_Range_In_2km](http://localhost:3000/v1/coupons?lat=21.2032321&long=72.8384328&range=2&limit=15&offset=0)
[Coupons_NearBy_Surat_Bus_Stand_With_Range_In_5km](http://localhost:3000/v1/coupons?lat=21.2032321&long=72.8384328&range=5&limit=15&offset=0)