import { CustomerDetailsService } from "../service/customerDetailsService"
import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";

export class CustomerDetailsController {
    private customerDetailsService: CustomerDetailsService;

    constructor(customerDetailsService: CustomerDetailsService) {
        this.customerDetailsService = customerDetailsService;
    }

    async getcustomerDetailsById(customerId: string): Promise<CustomerDetailsResponse> {
        return await this.customerDetailsService.getcustomerDetailsById(customerId);
    }

}

// export const handler = async (event) => {

//     try {
//         const customerId = event.pathParameters?.customerId;
//         if (!customerId || customerId.length < 7 || customerId.length > 7) {
//             return {
//                 statusCode: StatusCode.BAD_REQUEST,
//                 headers: HEADERS,
//                 body: JSON.stringify({ error: MESSAGES.INVALID_CUSTOMER_ID }),
//                 message: MESSAGES.INVALID_CUSTOMER_ID
//             };
//         }
//         const getCustomer = await customerDetailsService.getcustomerDetailsById(customerId);
//         const body = buildCustomerResponse(getCustomer);
//         return {
//             statusCode: StatusCode.OK,
//             headers: HEADERS,
//             body: body,
//             message: MESSAGES.EMPLOYEE_DATA_SUCCESS
//         };
//     } catch (error) {

//         return {
//             statusCode: StatusCode.INTERNAL_SERVER_ERROR,
//             headers: HEADERS,
//             body: JSON.stringify({ error: MESSAGES.FAILED_TO_GET_DATA }),
//             message: MESSAGES.FAILED_TO_GET_DATA
//         }
//     }

// }