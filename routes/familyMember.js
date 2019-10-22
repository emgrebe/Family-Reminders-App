var express = require('express');
var router = express.Router();
var peopleCtrl = require('../controllers/familyMember');

router.get('/', peopleCtrl.index);
router.get('/:id', peopleCtrl.show);
router.post('/', peopleCtrl.create);
router.delete('/:id', peopleCtrl.delete);
router.put('/:id', peopleCtrl.update);

module.exports = router;