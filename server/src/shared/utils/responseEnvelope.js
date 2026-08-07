function sendSuccess(res, { statusCode = 200, message = 'Success', data = null, meta = null }) {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
    meta,
    timestamp: new Date().toISOString(),
  });
}

function sendError(res, { statusCode = 500, message = 'An error occurred', errorCode = 'INTERNAL_ERROR', details = null }) {
  return res.status(statusCode).json({
    success: false,
    statusCode,
    errorCode,
    message,
    details,
    timestamp: new Date().toISOString(),
  });
}

module.exports = { sendSuccess, sendError };
