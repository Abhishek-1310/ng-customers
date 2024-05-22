"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const customerDetailsRepository_1 = require("../repository/customerDetailsRepository");
const customerDetailsService_1 = require("../service/customerDetailsService");
const customerTableName = 'ng-customerDetails';
const customerDetailsRepository = new customerDetailsRepository_1.CustomerDetailsRepository(customerTableName);
const customerDetailsService = new customerDetailsService_1.CustomerDetailsService(customerDetailsRepository);
const handler = async (event) => {
    try {
        const customerId = event.pathParameters?.customerId;
        if (!customerId || isNaN(Number(customerId)) || customerId.length < 6 || customerId.length > 6) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
                },
                body: JSON.stringify({ error: 'Invalid customer ID', status: 400 }),
                message: 'Invalid customer ID'
            };
        }
        const getCustomer = await customerDetailsService.getcustomerDetailsById(customerId);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With', // Allow specific headers
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
            },
            body: getCustomer,
            message: 'Employee Data get succesfully',
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
            },
            body: JSON.stringify({ error: 'Internal server error!' }),
            message: 'Failed to get Data',
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=customerDetailsController.js.map