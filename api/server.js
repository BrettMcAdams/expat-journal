const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");
const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);
server.use("/api/auth", authRouter);

server.get("*", (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/12353263/TVeqbmjL");
});

module.exports = server;
