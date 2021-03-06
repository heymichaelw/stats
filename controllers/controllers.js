const bodyParser = require('body-parser');
const User = require('../models/user');
const Task = require('../models/task');

module.exports = {

  tasks: function(req, res){
    Task.find({}).then(function(tasks){
      res.json(tasks);
    });
  },
  newTask: function(req, res){
    var newTask = new Task(req.body);
    newTask.save().then(function(task){
      res.json(task);
    });
  },
  viewTask: function(req, res){
    var id = req.params.id;
    Task.findById(id).then(function(task){
      res.json(task);
    });
  },
  updateTask: function(req, res){
    var id = req.params.id;
    var name = req.body.name;
    Task.findById(id).then(function(task){
      task.name = name;
      task.save();
      res.json(task);
    });
  },
  deleteTask: function(req, res){
    var id = req.params.id;
    Task.deleteOne({
      _id: id
    }).then(function(){
      var message = "Removed!";
      res.json(message);
    });
  },
  updateStats: function(req, res){
    var newStat = {
      type: req.body.type,
      number: req.body.number
    };
    var id = req.params.id;
    Task.findById(id).then(function(task){
      task.stats.push(newStat);
      task.save();
      res.json(task);
    });
  },
  deleteStats: function(req, res){
    // https://stackoverflow.com/questions/31105057/trying-to-remove-a-nested-object-in-mongoose
    var id = req.params.id;
    var statId = req.body.statId;
    Task.update({_id: id}, {
      $pull: {'stats': {_id: statId}}
    }
  ).then(function(task){
    res.json(task);
  });
  }
};
