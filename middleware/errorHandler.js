// I re-factored code to remove switch case and simplify code plus, brought the file of constants into the error handler for now.
const constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const errorTitles = {
  [constants.VALIDATION_ERROR]: "Validation Error",
  [constants.NOT_FOUND]: "Not Found",
  [constants.UNAUTHORIZED]: "Unauthorized",
  [constants.FORBIDDEN]: "Forbidden",
  [constants.SERVER_ERROR]: "Server Error",
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const title = errorTitles[statusCode] || "Unknown Error";

  res.json({ title, message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
