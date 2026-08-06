const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Department = require("../models/Department");
const Course = require("../models/Course");

const getDashboardStats = async (req, res) => {
  try {
    const [
  totalStudents,
  totalFaculty,
  totalDepartments,
  totalCourses,
] = await Promise.all([
  Student.countDocuments(),
  Faculty.countDocuments(),
  Department.countDocuments(),
  Course.countDocuments(),
]);

    res.status(200).json({
      success: true,
      data: {
        totalStudents,
        totalFaculty,
        totalDepartments,
        totalCourses,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};