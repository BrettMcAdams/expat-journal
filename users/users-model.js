const db = require("../database/db-config");
const sqlite3 = require('sqlite3')

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  update,
};

function find() {
  return db("users").select("id", "name", "email").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").select("id", "name", "email").where({ id });
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function remove(id) {
  return db("users").where({ id }).first().del();
}

async function update(id, user) {

    const [updatedId] = await db("users").where({ id }).update(user, "id");
    findById(updatedId)
}
