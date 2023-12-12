const express = require('express');
const app = express();
const router = require('./notes');

app.use('/notes', router);

module.exports = app;
