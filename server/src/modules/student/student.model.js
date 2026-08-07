const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    rollNumber: { type: String, required: true, unique: true, trim: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    course: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true, index: true },
    semester: { type: Number, required: true, min: 1, max: 12 },
    batch: { type: Number, required: true, index: true },
    section: { type: String, required: true, default: 'A' },
    address: { type: String, default: '' },
    status: { type: String, enum: ['Active', 'Inactive', 'Graduated', 'Suspended'], default: 'Active', index: true },
    isDeleted: { type: Boolean, default: false, index: true },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

// Pre-find hook to exclude soft-deleted records by default
studentSchema.pre(/^find/, function (next) {
  if (this.getFilter().isDeleted === undefined) {
    this.where({ isDeleted: false });
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);
