const mongoose = require('mongoose');

const { mongodbUrl } = require('./config/config');
const { logConst, msgConst } = require('./constants');
const { logger } = require('./logger');

const connectDB = () => {
  mongoose.connect(
    mongodbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    err => {
      if (err) {
        logger.error(`${logConst.LOG_ERROR} At connectDB ${err}`);
        throw err;
      }
      logger.info(msgConst.DB_CONNECTED);
    },
  );
};

module.exports = connectDB;
