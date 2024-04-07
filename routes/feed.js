const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feed");

// GET /feed/posts
router.get("/posts", feedController.getPost);

module.exports = router;
