const express = require("express");
const { createConsent } = require("../controllers/aaController");
const router = express.Router();

router.post("/consent", createConsent);

module.exports = router;
