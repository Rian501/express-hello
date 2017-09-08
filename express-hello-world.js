'use strict;'

const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/date', (req, res) => {
    let date = new Date();
    let dateString = date.toISOString();
    res.send(dateString);
});


let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});