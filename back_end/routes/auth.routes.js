const express = require("express");
const router = express.Router();

const {
  loginHandler,
  signupHandler,
  logOutHandler,
} = require("../controllers/auth.controller");

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", logOutHandler);

module.exports = router;
