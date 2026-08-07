const studentRepository = require('./student.repository');
const { NotFoundError, BadRequestError } = require('../../shared/errors/AppError');

class StudentService {
  async getStudents(query) {
    const { page = 1, limit = 10, search, department, batch, status } = query;
    const filter = {};

    if (department) filter.department = department;
    if (batch) filter.batch = Number(batch);
    if (status) filter.status = status;

    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { rollNumber: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    return studentRepository.findAll({
      filter,
      page: Number(page),
      limit: Number(limit),
    });
  }

  async getStudentById(id) {
    const student = await studentRepository.findById(id);
    if (!student) {
      throw new NotFoundError(`Student with ID ${id} not found`);
    }
    return student;
  }

  async createStudent(studentData) {
    const existing = await studentRepository.findByEmailOrRoll(
      studentData.email,
      studentData.rollNumber
    );
    if (existing) {
      throw new BadRequestError('Student with this email or roll number already exists');
    }
    return studentRepository.create(studentData);
  }

  async updateStudent(id, updateData) {
    await this.getStudentById(id);
    return studentRepository.update(id, updateData);
  }

  async deleteStudent(id) {
    await this.getStudentById(id);
    return studentRepository.softDelete(id);
  }
}

module.exports = new StudentService();
