'use strict;'
const { Router } = require('express');
const router = Router();


// router.use('/home', functionName);
router.use(require('./chickens.js'));
router.use(require('./eggs.js'));

router.get('/', (req, res) => {
	res.json({
		"chickens": "/see-our-chickens",
		"eggs": "/see-our-eggs"
	});
});




module.exports = router;