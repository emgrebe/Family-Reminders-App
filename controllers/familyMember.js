const Person = require ('../models/familyMember');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const people = await Person.find({});
  res.status(200).json(people);
}

async function show(req, res) {
  const person = await Person.findById(req.params.id);
  res.status(200).json(person);
}

async function create(req, res) {
  const person = await Person.create(req.body);
  res.status(201).json(person);
}

async function deleteOne(req, res) {
  const deletedPerson = await Person.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPerson);
}

async function update(req, res) {
  const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedPerson);
}