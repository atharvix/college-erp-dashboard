const studentService = require('./student.service');
const { sendSuccess } = require('../../shared/utils/responseEnvelope');
const { createStudentSchema, updateStudentSchema } = require('./student.dto');

class StudentController {
  async getStudents(req, res, next) {
    try {
      const result = await studentService.getStudents(req.query);
      return sendSuccess(res, {
        statusCode: 200,
        message: 'Students retrieved successfully',
        data: result.data,
        meta: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: result.totalPages,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getStudentById(req, res, next) {
    try {
      const student = await studentService.getStudentById(req.params.id);
      return sendSuccess(res, {
        statusCode: 200,
        message: 'Student retrieved successfully',
        data: student,
      });
    } catch (error) {
      next(error);
    }
  }

  async createStudent(req, res, next) {
    try {
      const validatedData = createStudentSchema.parse(req.body);
      const student = await studentService.createStudent(validatedData);
      return sendSuccess(res, {
        statusCode: 201,
        message: 'Student created successfully',
        data: student,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateStudent(req, res, next) {
    try {
      const validatedData = updateStudentSchema.parse(req.body);
      const student = await studentService.updateStudent(req.params.id, validatedData);
      return sendSuccess(res, {
        statusCode: 200,
        message: 'Student updated successfully',
        data: student,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteStudent(req, res, next) {
    try {
      await studentService.deleteStudent(req.params.id);
      return sendSuccess(res, {
        statusCode: 200,
        message: 'Student deleted (soft delete) successfully',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StudentController();
