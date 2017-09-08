let express = require('express');
let app = express();

//middleware? !

const logParams = (req, res, next) => {
    console.log("request", req);
    console.log('req params', req.params);

    next();
};

const anotherMiddlewareThing = (req, res, next) =>{ 
    console.log('whatever');

    next();
};

app.use(logParams);
app.use(anotherMiddlewareThing);

app.listen(3000, () => {
    console.log("listening on port 3000");
});