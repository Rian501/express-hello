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

const checkParams = (req, res, next) => {
	let url = req.path;
	if (url.indexOf('eggs' !== -1)){
		let date = new Date();
		console.log(`
You found the easter egg at ${date}!

        ,ggadddd8888888bbbbaaa,_
     ,ad888,      \`Y88,      \`Y888baa,
   ,dP"  "Y8b,      \`"Y8b,      \`"Y8888ba,
  ,88      "Y88b,      \`"Y8ba,       \`"Y88Ya,
 ,P88b,      \`"Y88b,       \`"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        \`"Y8ba,_      \`Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   \`8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         \`""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
\`b,"Y88ba,         ""Y88baa,_         """Y888bd"
 \`b, \`"Y88ba,_         ""Y888baa,_         ,8"
  \`8,   \`""Y88ba,_         \`"""Y8888baaaaaP"
   \`Ya,     \`""Y888ba,_           \`"d88P"
     \`"Yb,,_     \`""Y888baa,__,,adP""'
         \`"""YYYY8888888PPPP"""'

	`);
	}
	next();
}

app.use(logParams);
app.use(checkParams);
app.use('/', routes);


//if you use this, you can give the direct path and result desired
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
