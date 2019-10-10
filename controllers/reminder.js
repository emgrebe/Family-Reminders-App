const Reminder = require('../models/reminder');

module.exports = {
  index,
  show, 
  create
};

async function index(req, res) {
  try {
    const reminders = await Reminder.find({});
    await res.status(200).json(reminders);
  } catch(error) {
    throw Error(error)
  }
}

async function show(req, res) {
  try {
    const reminder = await Reminder.findById(req.params.id);
    await res.status(200).json(reminder);
  } catch(error) {
    throw Error(error)
  }
}

async function create(req, res) {
  try {
    const reminder = await Reminder.create(req.body);
    await res.status(200).json(reminder);
  } catch(error) {
    throw Error(error)
  }
}