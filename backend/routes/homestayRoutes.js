const express = require("express");

const router = express.Router();

const {
  getHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
} = require("../controllers/homestayController");

router.get("/", getHomestays);

router.get("/:id", getHomestayById);

router.post("/", createHomestay);

router.put("/:id", updateHomestay);

router.delete("/:id", deleteHomestay);

module.exports = router;