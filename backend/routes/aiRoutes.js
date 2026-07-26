const express = require("express");

const router = express.Router();

const { getTravelTips } = require("../controllers/aiController");

router.post("/travel-tips", getTravelTips);

module.exports = router;