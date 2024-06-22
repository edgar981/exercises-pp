const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

router.route('/').get(apiController.getGreeting);

module.exports = router;