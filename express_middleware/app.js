'use strict';

let express = require('express');
let app = express();
require('dotenv').config();
let routes = require('./routes/');

const logParams = (req, res, next) => {
    //console.log("request", req);
    console.log('req params', req.params);
    next();
};

app.use(logParams);
app.use('/', routes);

// app.use(express.static(__dirname + "/templates"))

app.use( (req, res, next) => {
	let error = new Error('it is bork bork borken');
	error.status=404;
	next(error);
})

app.use( (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

let port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`listening on port ${port}`)
});
