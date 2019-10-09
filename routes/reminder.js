const express = require('express');
const router = express.Router();
const reminderCtrl = require('../controllers/reminder');

router.post('/', reminderCtrl.index);

module.exports = router;