const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

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
app.use("/api/faculty", facultyRoutes);

module.exports = app;