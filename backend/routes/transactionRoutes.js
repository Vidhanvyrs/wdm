const express = require("express");
const { getExpenseSummary } = require("../controllers/transactionController");
const router = express.Router();

router.get("/summary/:userId", getExpenseSummary);

module.exports = router;
