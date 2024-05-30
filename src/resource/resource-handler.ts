import { CustomerDetailsRepository } from "../repository/customerDetailsRepository"
import { CustomerDetailsService } from "../service/customerDetailsService"
import { buildCustomerResponse } from "../builder/response-builder"
import { CustomerDetailsController } from "../controller/customerDetailsController"

const customerTableName = 'ngcustomer'
const customerDetailsRepository = new CustomerDetailsRepository(customerTableName)
const customerDetailsService = new CustomerDetailsService(customerDetailsRepository);
const customerDetailsController = new CustomerDetailsController(customerDetailsService)

import {
    StatusCode,
    HEADERS,
    MESSAGES
} from "../constant/constants"

export const handler = async (event) => {
    try {
        const customerId = event.pathParameters?.customerId;
        if (!customerId || customerId.length < 7 || customerId.length > 7) {
            return {
                "statusCode": StatusCode.BAD_REQUEST,
                "headers": HEADERS,
                "body": JSON.stringify({ error: MESSAGES.INVALID_CUSTOMER_ID }),
            };
        }
        const getCustomer = await customerDetailsController.getcustomerDetailsById(customerId);
        const body = buildCustomerResponse(getCustomer);
        return {
            "statusCode": StatusCode.OK,
            "headers": HEADERS,
            "body": JSON.stringify(body),
        };
    } catch (error) {

        return {
            "statusCode": StatusCode.INTERNAL_SERVER_ERROR,
            "headers": HEADERS,
            "body": JSON.stringify({ error: MESSAGES.FAILED_TO_GET_DATA }),

        }
    }

}