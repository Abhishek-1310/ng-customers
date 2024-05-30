"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.HEADERS = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
exports.HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE',
};
exports.MESSAGES = {
    EMPLOYEE_DATA_SUCCESS: 'Employee Data get successfully',
    INVALID_CUSTOMER_ID: 'Invalid customer ID',
    FAILED_TO_GET_DATA: 'Internal server Error',
};
//# sourceMappingURL=constants.js.map