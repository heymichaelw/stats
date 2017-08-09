const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const app = express();

mongoose.connect('mongodb://localhost:27017/statdb');


app.listen(3000);
