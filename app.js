const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const bodyParser = require('body-parser');
const controllers = require('./controllers/controllers')
const User = require('./models/user');
const Task = require('./models/task');
mongoose.Promise = require('bluebird');

const app = express();

passport.use(new BasicStrategy(
  function(username, password, done) {
      User.findOne({
        username: username,
        password: password
      }).then(function(user){
        if (!user) {
          return done(null, false);
        }
        if (password !== password) {
          return done(null, false);
        }
        else {
          return done(null, user);
        }
      });
  }
));

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/statdb');


app.get("/api/tasks", passport.authenticate('basic', {session: false}), controllers.tasks);
app.post("/api/tasks", passport.authenticate('basic', {session: false}), controllers.newTask);

app.get("/api/tasks/:id", passport.authenticate('basic', {session: false}), controllers.viewTask);

app.put("/api/tasks/:id", passport.authenticate('basic', {session: false}), controllers.updateTask);

app.delete("/api/tasks/:id", passport.authenticate('basic', {session: false}), controllers.deleteTask);

app.post("/api/tasks/:id/stats", passport.authenticate('basic', {session: false}), controllers.updateStats);


app.listen(3001);
