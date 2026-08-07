const { generateAccessToken, generateRefreshToken } = require('../../shared/utils/tokenUtils');
const { UnauthorizedError } = require('../../shared/errors/AppError');
const { ROLES } = require('../../constants/roles');

class AuthService {
  async login({ email, password }) {
    // Enterprise Auth Simulation (in production connects to User model with bcrypt)
    if (email === 'admin@university.edu' && password === 'admin123') {
      const user = {
        id: 'usr-admin-01',
        name: 'Dr. Alex Vance',
        email,
        role: ROLES.SUPER_ADMIN,
        department: 'Computer Science',
      };

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken({ id: user.id });

      return { user, accessToken, refreshToken };
    }

    if (email === 'faculty@university.edu' && password === 'faculty123') {
      const user = {
        id: 'usr-fac-01',
        name: 'Dr. Sarah Connor',
        email,
        role: ROLES.FACULTY,
        department: 'Computer Science',
      };

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken({ id: user.id });

      return { user, accessToken, refreshToken };
    }

    throw new UnauthorizedError('Invalid credentials provided');
  }
}

module.exports = new AuthService();
