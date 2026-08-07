const express = require('express');
const studentController = require('./student.controller');
const { authenticate, authorize } = require('../../middlewares/authMiddleware');
const { ROLES } = require('../../constants/roles');

const router = express.Router();

// GET /api/v1/students - List students with search & pagination
router.get('/', studentController.getStudents);

// GET /api/v1/students/:id - Get student by ID
router.get('/:id', studentController.getStudentById);

// POST /api/v1/students - Create new student
router.post(
  '/',
  authenticate,
  authorize(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  studentController.createStudent
);

// PUT /api/v1/students/:id - Update student
router.put(
  '/:id',
  authenticate,
  authorize(ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.FACULTY),
  studentController.updateStudent
);

// DELETE /api/v1/students/:id - Soft delete student
router.delete(
  '/:id',
  authenticate,
  authorize(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  studentController.deleteStudent
);

module.exports = router;
