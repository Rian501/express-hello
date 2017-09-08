'use strict;'

const { sendFile } = require('fs');
const { join } = require('path');

module.exports.showChickens = (req, res, next) => {
	// console.log('req?', req);
	// console.log('res?', res);
	console.log("wtf is the dirname", __dirname);
	res.sendFile(join(__dirname, "../templates/chicken.html"));
};