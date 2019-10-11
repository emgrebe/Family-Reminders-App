const User = require('../models/user');

module.exports = {
  del,
  getAll,
  show, 
  create,
};

async function getAll(req, res) {
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

function create(req, res){
  console.log(req.user)
  let reminder = req.body.msg.reminder
  let date = req.body.msg.date
  User.findById(req.user._id)
  .then(s => {
    let obj = {
      reminder,
      date
    }
    s.reminder.push(obj)
    s.save(()=>
    {
      res.status(200).json(obj)
    })
  })
}

function del(req, res){
  console.log(req.body)
  const userId = req.body.user._id
  User.findById(userId)
  .then(person=>{
    const reminder = user.reminder.id(reminderId)
    user.reminder.remove(reminder)
    user.save(()=>{
      res.status(201).json(req.body.reminderIdx)
    })
  })
}