/**
 * Generic exception wrapper for error handling
 */
exports.HTTPException = (
  message = "Internal Server Error",
  http_code = 500
) => {
  const err = new Error(message);
  err.http_code = http_code;
  return err;
};
