exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("email").notNullable().unique();
      tbl.string("password", 256).notNullable();
    })
    .createTable("posts", (tbl) => {
      tbl.increments();
      tbl.string("photo_url");
      tbl.string("story_title", 128).notNullable();
      tbl.string("story", 1024).notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.integer("upvotes");
      tbl
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("posts");
};
