module.exports = {
  isValidLogin,
  isValidRegister,
};

function isValidLogin(user) {
  return Boolean(
    user.email && user.password && typeof user.password === "string"
  );
}

function isValidRegister(user) {
  return Boolean(
    user.name && user.email && user.password && typeof user.password === "string"
  );
}