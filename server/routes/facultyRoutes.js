const express = require("express");

const {
  getFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} = require("../controllers/facultyController");

const router = express.Router();

// Get All Faculty
router.get("/", getFaculty);

// Get Faculty By ID
router.get("/:id", getFacultyById);

// Create Faculty
router.post("/", createFaculty);

// Update Faculty
router.put("/:id", updateFaculty);

// Delete Faculty
router.delete("/:id", deleteFaculty);

module.exports = router;