const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Restricted path, please login" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log("decoded error ->", err);
      return res.status(401).json({ message: "token bad" });
    }
    req.decodedJwt = decoded;
    next();
  });
};
