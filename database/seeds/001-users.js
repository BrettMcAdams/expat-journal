exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      name: "admin",
      email: "admin@admin.com",
      password: "password",
    },
    {
      name: "user",
      email: "user@user.com",
      password: "password",
    },
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
