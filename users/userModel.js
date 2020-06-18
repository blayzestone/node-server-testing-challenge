const db = require("../data/connection");

module.exports = {
  find,
  add,
  remove,
};

function find() {
  return db("user").select("*");
}

function add(user) {
  return db("user")
    .insert(user)
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("user").select("*").where({ id }).first();
}

function remove(id) {
  return db("user").del().where({ id });
}
