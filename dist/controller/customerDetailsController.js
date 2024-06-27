"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetailsController = void 0;
const constants_1 = require("../constant/constants");
const customerValidator_1 = require("../validator/customerValidator");
const response_builder_1 = require("../builder/response-builder");
// const jsonwebtoken_1 = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const validators = new customerValidator_1.Validators();
// function getTokenFromEvent(event) {
//   const authorizationHeader = event.headers?.Authorization || "";
//   if (authorizationHeader.startsWith("Bearer ")) {
//     return authorizationHeader.split(" ")[1];
//   }
//   return null;
// }
class CustomerDetailsController {
  customerDetailsService;
  constructor(customerDetailsService) {
    this.customerDetailsService = customerDetailsService;
  }
  async getCustomerDetailById(event) {
    try {
      const { headers } = event;
      const authorizationHeader = headers.Authorization;
      const accessToken = authorizationHeader.split(" ")[1];
      console.log(accessToken);
      const decodedToken = jwt.verify(accessToken, "nextgen");
      console.log(decodedToken);
      const expiryTimestamp = decodedToken.exp;
      const customerid = decodedToken.customer_id;
      const customerId = event.pathParameters?.customerId;

      if (Math.floor(Date.now() / 1000) <= expiryTimestamp) {
        if (customerid != customerId) {
          return response_builder_1.ResponseHandler.createErrorResponse(
            constants_1.StatusCode.UNAUTHORIZED,
            constants_1.MESSAGES.UNAUTHORIZED
          );
        } else {
          if (!validators.checkCustomerId(customerId)) {
            return response_builder_1.ResponseHandler.createErrorResponse(
              constants_1.StatusCode.BAD_REQUEST,
              constants_1.MESSAGES.INVALID_CUSTOMER_ID
            );
          }
          const getCustomer =
            await this.customerDetailsService.getcustomerDetailsById(
              customerId
            );
          if (!getCustomer.Item) {
            return response_builder_1.ResponseHandler.createErrorResponse(
              constants_1.StatusCode.NOT_FOUND,
              constants_1.MESSAGES.DATA_NOT_FOUND
            );
          }
          return response_builder_1.ResponseHandler.createSuccessResponse(
            getCustomer
          );
        }
      } else {
        return response_builder_1.ResponseHandler.createErrorResponse(
          constants_1.StatusCode.UNAUTHORIZED,
          constants_1.MESSAGES.SESSION_EXPIRED
        );
      }
    } catch (error) {
      console.log(error);
      return response_builder_1.ResponseHandler.createErrorResponse(
        constants_1.StatusCode.INTERNAL_SERVER_ERROR,
        constants_1.MESSAGES.FAILED_TO_GET_DATA
      );
    }
  }
}
exports.CustomerDetailsController = CustomerDetailsController;
