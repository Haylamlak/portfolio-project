const express = require("express");
const router = express.Router();

const {
  createMessage,
  getMessages,
  deleteMessage
} = require("../controllers/contactController");

// CREATE message
router.post("/contact", createMessage);

// GET messages
router.get("/messages", getMessages);

// DELETE message
router.delete("/messages/:id", deleteMessage);

module.exports = router;