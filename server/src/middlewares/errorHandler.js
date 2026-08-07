const { sendError } = require('../shared/utils/responseEnvelope');

function errorHandler(err, req, res, next) {
  console.error(`[SERVER ERROR] ${err.name || 'Error'}: ${err.message}`, err.stack);

  if (err.isOperational) {
    return sendError(res, {
      statusCode: err.statusCode,
      errorCode: err.errorCode,
      message: err.message,
    });
  }

  // Handle Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return sendError(res, {
      statusCode: 409,
      errorCode: 'DUPLICATE_KEY_ERROR',
      message: `A record with this ${field} already exists.`,
    });
  }

  // Handle Zod Validation Errors
  if (err.name === 'ZodError') {
    return sendError(res, {
      statusCode: 400,
      errorCode: 'VALIDATION_ERROR',
      message: 'Invalid payload request data',
      details: err.errors,
    });
  }

  // Generic 500 fallback for unhandled exceptions
  return sendError(res, {
    statusCode: 500,
    errorCode: 'INTERNAL_SERVER_ERROR',
    message: process.env.NODE_ENV === 'production' ? 'An unexpected server error occurred' : err.message,
  });
}

module.exports = errorHandler;
