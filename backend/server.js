const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aaRoutes = require("./routes/aaRoutes");
const txnRoutes = require("./routes/transactionRoutes");

const app = express();

// More specific CORS configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-product-instance-id"],
  })
);
app.use(express.json());

// Add error logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/aa", aaRoutes);
app.use("/api/txns", txnRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    error: "Something broke!",
    details: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the API: http://localhost:${PORT}/api/aa/consent`);
});
