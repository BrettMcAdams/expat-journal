const router = require("express").Router();

const Posts = require("./posts-model");

const { isValid } = require("./posts-service");

router.get("/", (req, res) => {
  Posts.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: "Database error", error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Posts.findById(id)
    .then((post) => {
      if (post.length !== 0) {
        res.status(200).json(post[0]);
      } else {
        res.status(400).json({ message: `No post with the id ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const newPost = req.body;

  if (isValid(newPost)) {
    Posts.add(newPost)
      .then((post) => {
        res.status(201).json({ data: post });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "Please provide a completed post. Your password should be alphanumeric",
    });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Posts.remove(id)
    .then((post) => {
      if (post === 1) {
        res.status(204).json({
          message: `The post with the id ${id} was successfully deleted`,
        });
      } else {
        res.status(400).json({ message: `No post with the id ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Database error", error: err.message });
    });
})

module.exports = router;
