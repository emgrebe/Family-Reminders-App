var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reminderSchema = new Schema({
  phone: Number,
  user: String,
  reminder: String,
  answer: String
});

module.exports = mongoose.model('Reminder', reminderSchema);