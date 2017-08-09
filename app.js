const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const controllers = require('./controllers/controllers')
mongoose.Promise = require('bluebird');

const app = express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/statdb');


app.get("/api/tasks", controllers.tasks);
app.post("/api/tasks", controllers.newTask);

app.listen(3001);
