"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const customerDetailsRepository_1 = require("../repository/customerDetailsRepository");
const customerDetailsService_1 = require("../service/customerDetailsService");
const response_builder_1 = require("../builder/response-builder");
const customerDetailsController_1 = require("../controller/customerDetailsController");
const customerTableName = 'ngcustomer';
const customerDetailsRepository = new customerDetailsRepository_1.CustomerDetailsRepository(customerTableName);
const customerDetailsService = new customerDetailsService_1.CustomerDetailsService(customerDetailsRepository);
const customerDetailsController = new customerDetailsController_1.CustomerDetailsController(customerDetailsService);
const constants_1 = require("../constant/constants");
const handler = async (event) => {
    try {
        const customerId = event.pathParameters?.customerId;
        if (!customerId || customerId.length < 7 || customerId.length > 7) {
            return {
                "statusCode": constants_1.StatusCode.BAD_REQUEST,
                "headers": constants_1.HEADERS,
                "body": JSON.stringify({ error: constants_1.MESSAGES.INVALID_CUSTOMER_ID }),
            };
        }
        const getCustomer = await customerDetailsController.getcustomerDetailsById(customerId);
        const body = (0, response_builder_1.buildCustomerResponse)(getCustomer);
        return {
            "statusCode": constants_1.StatusCode.OK,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify(body),
        };
    }
    catch (error) {
        return {
            "statusCode": constants_1.StatusCode.INTERNAL_SERVER_ERROR,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify({ error: constants_1.MESSAGES.FAILED_TO_GET_DATA }),
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=resource-handler.js.map