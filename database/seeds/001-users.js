const bcryptjs = require("bcryptjs");

exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const password1 = bcryptjs.hashSync("password", 8);
  const password2 = bcryptjs.hashSync("password", 8);

  const users = [
    {
      name: "admin",
      email: "admin@admin.com",
      password: password1,
    },
    {
      name: "user",
      email: "user@user.com",
      password: password2,
    },
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
