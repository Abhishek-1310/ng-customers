"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event =
  exports.MESSAGES =
  exports.HEADERS =
  exports.StatusCode =
    void 0;
var StatusCode;
(function (StatusCode) {
  StatusCode[(StatusCode["BAD_REQUEST"] = 400)] = "BAD_REQUEST";
  StatusCode[(StatusCode["OK"] = 200)] = "OK";
  StatusCode[(StatusCode["INTERNAL_SERVER_ERROR"] = 500)] =
    "INTERNAL_SERVER_ERROR";
  StatusCode[(StatusCode["NOT_FOUND"] = 404)] = "NOT_FOUND";
  StatusCode[(StatusCode["UNAUTHORIZED"] = 401)] = "UNAUTHORIZED";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
exports.HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With",
  "Access-Control-Allow-Methods": "GET",
};
exports.MESSAGES = {
  EMPLOYEE_DATA_SUCCESS: "Employee Data Get Successfully",
  INVALID_CUSTOMER_ID: "Invalid Customer ID",
  FAILED_TO_GET_DATA: "Internal Server Error",
  DATA_NOT_FOUND: "Employee Data Not Found",
  UNAUTHORIZED: "unauthorized ID",
  SESSION_EXPIRED: "session expired",
};
exports.event = {
  pathParameters: {
    customerId: "6793625",
  },
};
//# sourceMappingURL=constants.js.map
