const express = require('express');
const router = express.Router();
const reminderCtrl = require('../controllers/reminder');

router.post('/all', reminderCtrl.getAll);
router.use(require('../config/auth'))
router.post('/create', reminderCtrl.create);
router.post('/delete', reminderCtrl.del);

module.exports = router;