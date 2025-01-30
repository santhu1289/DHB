/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors"); // Middleware to handle CORS
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

let visitorsCount = 1; // Simple in-memory storage for visitors count

// GET: Fetch the current visitors count
app.get("/api/visitors", (req, res) => {
  res.json({ count: visitorsCount });
});

// POST: Increment the visitors count
app.post("/api/visitors", (req, res) => {
  visitorsCount + 1; // Increment directly
  res.json({ message: "Visitors count updated", count: visitorsCount });
});

// Start the server
const PORT = 5000; // Server will run on localhost:5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
