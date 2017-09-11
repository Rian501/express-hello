'use strict';
const { Router } = require('express');
const router = Router();
const { showEggs } = require('../controllers/eggCtrl.js')

router.get('/see-our-eggs', showEggs);

module.exports = router;