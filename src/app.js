/* eslint-disable no-unused-vars */
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const bootFiles = require('./boot');

const { urlConst } = require('./constants');
const connectDB = require('./db-client');
const serverRoutes = require('./modules/server/routes/server-routes');
const v1Routes = require('./modules/v1');

const { createErrorResponse } = require('./utils/response');

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

connectDB();
bootFiles();

app.use(urlConst.API_VERSION_1, v1Routes);
app.use(urlConst.API_SERVER_VERSION, serverRoutes);

app.use((err, req, res, next) => {
  createErrorResponse(err, res);
});

module.exports = app;
