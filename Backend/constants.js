exports.statusCodes = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  SERVER_ERROR: 500,
  REQUEST_CONFLICT: 409,
  FORBIDDEN: 403,
  NON_AUTHORATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  UNPROCESSABLE_ENTITY: 422,
  UNAUTHORIZED_ACCESS: 401,
};
exports.successMessages = {};
exports.errorMessages = {};
exports.errorStatus = {};
exports.responsHeader = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET, DELETE",
};
