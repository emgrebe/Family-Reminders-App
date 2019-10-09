var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reminderSchema = new Schema({
  date: Date,
  reminder: String
});

module.exports = mongoose.model('Reminder', reminderSchema);