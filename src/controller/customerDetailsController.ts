import { CustomerDetailsRepository } from "../repository/customerDetailsRepository"
import { CustomerDetailsService } from "../service/customerDetailsService"


const customerTableName = 'ng-customerDetails'
const customerDetailsRepository = new CustomerDetailsRepository(customerTableName)
const customerDetailsService = new CustomerDetailsService(customerDetailsRepository);

export const handler = async (event) => {

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
    } catch (error) {

        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
            },
            body: JSON.stringify({ error: 'Internal server error!' }),
            message: 'Failed to get Data',
        }
    }

}