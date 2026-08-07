const Student = require('./student.model');

class StudentRepository {
  async findAll({ filter = {}, page = 1, limit = 10, sort = { createdAt: -1 } }) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      Student.find(filter).sort(sort).skip(skip).limit(limit),
      Student.countDocuments(filter),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) || 1 };
  }

  async findById(id) {
    return Student.findById(id);
  }

  async findByEmailOrRoll(email, rollNumber) {
    return Student.findOne({
      $or: [{ email }, { rollNumber }],
      isDeleted: false,
    });
  }

  async create(studentData) {
    return Student.create(studentData);
  }

  async update(id, updateData) {
    return Student.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async softDelete(id) {
    return Student.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );
  }
}

module.exports = new StudentRepository();
