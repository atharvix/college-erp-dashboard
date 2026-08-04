const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("College ERP Backend is Running 🚀");
});

// Student Routes
app.use("/api/students", studentRoutes);

module.exports = app;