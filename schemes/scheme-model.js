module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id: id});
}

function findSteps(id) {
  return db('steps')
    .where({ id: id});
}

function add(scheme) {
  return db('schemes')
          .insert(scheme);
}

function update(scheme, id) {
  return db('schemes')
          .update(scheme)
          .where({ id: id});
}

function remove(id) {
  return db('schemes')
          .remove()
          .where({ id: id});
}

