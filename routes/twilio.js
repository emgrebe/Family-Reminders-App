const express = require('express');
const router = express.Router();
const twilioCtrl = require('../controllers/twilio');

router.get('/', twilioCtrl.sms)

module.exports = router;