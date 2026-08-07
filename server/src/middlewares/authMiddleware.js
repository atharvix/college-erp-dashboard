const { verifyAccessToken } = require('../shared/utils/tokenUtils');
const { UnauthorizedError, ForbiddenError } = require('../shared/errors/AppError');

function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Access token required in Authorization header');
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return next(new UnauthorizedError('Invalid or expired token'));
    }
    next(error);
  }
}

function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
      return next(
        new ForbiddenError(
          `User role '${req.user.role}' is not authorized to perform this action`
        )
      );
    }

    next();
  };
}

module.exports = { authenticate, authorize };
