// const Transaction = require("../models/Transaction");

// const getExpenseSummary = async (req, res) => {
//   const { userId } = req.params;
//   const now = new Date();

//   const startOfToday = new Date(now.setHours(0, 0, 0, 0));
//   const startOfWeek = new Date(now.setDate(now.getDate() - 7));
//   const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

//   const allTxns = await Transaction.find({ userId, type: "DEBIT" });

//   const daily = allTxns.filter((txn) => new Date(txn.txnDate) >= startOfToday);
//   const weekly = allTxns.filter((txn) => new Date(txn.txnDate) >= startOfWeek);
//   const monthly = allTxns.filter(
//     (txn) => new Date(txn.txnDate) >= startOfMonth
//   );

//   const sum = (arr) => arr.reduce((acc, t) => acc + t.amount, 0);

//   res.json({
//     dailyExpense: sum(daily),
//     weeklyExpense: sum(weekly),
//     monthlyExpense: sum(monthly),
//   });
// };
const Transaction = require("../models/Transaction");

const getExpenseSummary = (req, res) => {
  try {
    const { userId } = req.params;
    const transactions = Transaction.findByUserId(userId);

    // Calculate summary
    const summary = {
      daily: 0,
      weekly: 0,
      monthly: 0,
    };

    transactions.forEach((txn) => {
      if (txn.type === "DEBIT") {
        summary.daily += txn.amount;
        summary.weekly += txn.amount;
        summary.monthly += txn.amount;
      }
    });

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getExpenseSummary,
};
