const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {type: String, required: true},
  stats: [{
    date: {type: Date, required: true},
    type: {type: String, required: true},
    number: {type: Number, required: true}
  }],
  // http://mongoosejs.com/docs/schematypes.html
  userId: {type: mongoose.Schema.ObjectId, required: true}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
