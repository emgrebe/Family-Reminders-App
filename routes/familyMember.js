var express = require('express');
var router = express.Router();
var peopleCtrl = require('../controllers/familyMember');

router.get('/familyInfo', peopleCtrl.index);
router.get('/familyInfo/:id', peopleCtrl.show);
router.post('/familyInfo', peopleCtrl.create);
router.delete('/familyInfo/:id', peopleCtrl.delete);
router.put('/familyInfo/:id', peopleCtrl.update);

module.exports = router;