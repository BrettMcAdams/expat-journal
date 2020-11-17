const db = require("../database/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("posts")
    .select(
      "id",
      "photo_url",
      "story_title",
      "story",
      "created_at",
      "upvotes",
      "user_id"
    )
    .orderBy("id");
}

function findById(id) {
  return db("posts").where({ id });
}

async function add(post) {
  try {
    const [id] = await db("posts").insert(post, "id");

    findById(id);
  } catch (error) {
    throw error;
  }
}

async function update(id, post) {
  try {
    const [updatedId] = await db("posts").where({ id }).update(post, "id");

    return findById(updatedId);
  } catch (error) {
    throw error
  }
}

function remove(id) {
  return db("posts").where({ id }).del();
}
