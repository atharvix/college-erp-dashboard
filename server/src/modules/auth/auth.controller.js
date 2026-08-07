const authService = require('./auth.service');
const { sendSuccess } = require('../../shared/utils/responseEnvelope');

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      return sendSuccess(res, {
        statusCode: 200,
        message: 'Login successful',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
