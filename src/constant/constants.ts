export enum StatusCode {
  BAD_REQUEST = 400,
  OK = 200,
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
}

export const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With",
  "Access-Control-Allow-Methods": "GET",
};

export const MESSAGES = {
  EMPLOYEE_DATA_SUCCESS: "Employee Data Get Successfully",
  INVALID_CUSTOMER_ID: "Invalid Customer ID",
  FAILED_TO_GET_DATA: "Internal Server Error",
  DATA_NOT_FOUND: "Employee Data Not Found",
  UNAUTHORIZED: "token unauthorized",
  SESSION_EXPIRED: "session expired",
};

export const event = {
  pathParameters: {
    customerId: "6793625",
  },
};
