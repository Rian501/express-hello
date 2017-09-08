'use strict;'

const { sendFile } = require('fs');
const { join } = require('path');

module.exports.showEggs = (req, res, next) => {
	res.sendFile(join(__dirname, "../templates/egg.html"));
};