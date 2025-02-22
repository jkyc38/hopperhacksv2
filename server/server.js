const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
