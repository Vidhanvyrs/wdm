const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aaRoutes = require("./routes/aaRoutes");
const txnRoutes = require("./routes/transactionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/aa", aaRoutes);
app.use("/api/txns", txnRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
