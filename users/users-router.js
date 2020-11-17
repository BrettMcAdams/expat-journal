const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware");
const { isValidRegister } = require("../users/users-service");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.get("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((user) => {
      if (user.length !== 0) {
        res.status(200).json(user[0]);
      } else {
        res.status(400).json({ error: `No user with the id ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const user = req.body;

  if (isValidRegister(user)) {

    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcryptjs.hashSync(user.password, rounds);

    user.password = hash;

    Users.update(id, user)
      .then((user) => {
        res.status(202).json(user[0]);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "database error", error: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "Please provide a name, email and password. Your password should be alphanumeric",
    });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then((user) => {
      if (user === 1) {
        res.status(202).json({
          message: `The user with the id ${id} was successfully deleted`,
        });
      } else {
        res.status(400).json({ message: `No user with the id ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Database error", error: err.message });
    });
});

module.exports = router;
