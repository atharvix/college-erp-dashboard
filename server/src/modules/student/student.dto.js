const { z } = require('zod');

const createStudentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  rollNumber: z.string().min(3, 'Roll number is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  gender: z.enum(['Male', 'Female', 'Other']),
  course: z.string().min(2, 'Course name is required'),
  department: z.string().min(2, 'Department is required'),
  semester: z.number().int().min(1).max(12),
  batch: z.number().int().min(2000).max(2100),
  section: z.string().default('A'),
  address: z.string().optional(),
  status: z.enum(['Active', 'Inactive', 'Graduated', 'Suspended']).default('Active'),
});

const updateStudentSchema = createStudentSchema.partial();

module.exports = {
  createStudentSchema,
  updateStudentSchema,
};
