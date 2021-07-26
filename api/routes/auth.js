const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  User.create({ username: username, password: hash, email: email })
    .then((createdUser) => {
      console.log(createdUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
