var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: {type: String},
  email: {type: String},
  phone: {type: Number},
  birthday: {type: Date}
},{
  timestamps: true
});

module.exports = mongoose.model('Person', personSchema);