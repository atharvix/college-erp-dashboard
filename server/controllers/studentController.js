const Student = require("../models/Student");

// Get All Students
const getStudents = async (req, res) => {
  res.json({
    message: "Get All Students API",
  });
};

// Get Student By ID
const getStudentById = async (req, res) => {
  res.json({
    message: "Get Student By ID API",
  });
};

// Create Student
const createStudent = async (req, res) => {
  res.json({
    message: "Create Student API",
  });
};

// Update Student
const updateStudent = async (req, res) => {
  res.json({
    message: "Update Student API",
  });
};

// Delete Student
const deleteStudent = async (req, res) => {
  res.json({
    message: "Delete Student API",
  });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};