var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reminderSchema = new Schema({
  name: String,
  reminder: String,
  answer: String
});

module.exports = mongoose.model('Reminder', reminderSchema);