const ROLES = {
  SUPER_ADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  FACULTY: 'Faculty',
  STUDENT: 'Student',
  GUEST: 'Guest',
};

const PERMISSIONS = {
  READ_ALL: 'read:all',
  WRITE_ALL: 'write:all',
  DELETE_ALL: 'delete:all',
  MANAGE_STUDENTS: 'manage:students',
  MANAGE_FACULTY: 'manage:faculty',
  MANAGE_COURSES: 'manage:courses',
};

module.exports = { ROLES, PERMISSIONS };
