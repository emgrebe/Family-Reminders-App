var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reminderSchema = new Schema({
  name: String,
  phone: String,
  notification: Number,
  timeZone: String,
  time: {type: Date, index: true}
});

module.exports = mongoose.model('Reminder', reminderSchema);