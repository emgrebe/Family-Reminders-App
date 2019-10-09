const Reminder = require('../models/reminder');

module.exports = {
  index,
  show, 
  create
};

async function index(req, res) {
  const reminders = await Reminder.find({});
  res.status(200).json(reminders);
}

async function show(req, res) {
  const reminder = await Reminder.findById(req.params.id);
  res.status(200).json(reminder);
}

async function create(req, res) {
  const reminder = await Reminder.create(req.body);
  res.status(200).json(reminder);
}