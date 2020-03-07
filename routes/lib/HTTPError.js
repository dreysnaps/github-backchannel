exports.HTTPError = (
  message = "Encountered an error, please check input.",
  http_code = 400
) => {
  const err = new Error(message);
  err.http_code = http_code;
  return err;
};
