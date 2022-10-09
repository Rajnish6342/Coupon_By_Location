const express = require('express');

const router = express.Router();
const serverConfigController = require('../controllers/server-controller');

router.get('/', serverConfigController.serverVersion);

module.exports = router;
