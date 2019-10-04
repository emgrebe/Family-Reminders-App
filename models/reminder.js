var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reminderSchema = new Schema({
  user: String,
  reminder: String,
  answer: String
});

module.exports = mongoose.model('Reminder', reminderSchema);