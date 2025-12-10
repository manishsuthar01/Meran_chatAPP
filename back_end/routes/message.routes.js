const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");

const {
  sendMessage,
  receiveMessage,
} = require("../controllers/message.controller");

router.get("/:id", protectRoute, receiveMessage);
router.post("/send/:id", protectRoute, sendMessage);

// router.post("/send/:id", receivedMessage);

module.exports = router;
