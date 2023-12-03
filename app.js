"use strict";
const express = require('express');
const app = express();

const home = require('./routes/home');

const PORT = 3000;

app.set('view', 'views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;