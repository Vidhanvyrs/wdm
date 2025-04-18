// const mongoose = require("mongoose");

// const transactionSchema = new mongoose.Schema({
//   userId: String,
//   txnDate: Date,
//   amount: Number,
//   type: String, // DEBIT or CREDIT
//   description: String,
// });

// module.exports = mongoose.model("Transaction", transactionSchema);
// In-memory store for transactions
const transactions = [];

class Transaction {
  constructor(userId, txnDate, amount, type, description) {
    this.id = Date.now().toString(); // Simple unique ID
    this.userId = userId;
    this.txnDate = txnDate;
    this.amount = amount;
    this.type = type;
    this.description = description;
  }

  // Static methods to handle transactions
  static create(data) {
    const transaction = new Transaction(
      data.userId,
      data.txnDate || new Date(),
      data.amount,
      data.type,
      data.description
    );
    transactions.push(transaction);
    return transaction;
  }

  static findByUserId(userId) {
    return transactions.filter((txn) => txn.userId === userId);
  }

  static getAll() {
    return transactions;
  }
}

module.exports = Transaction;
