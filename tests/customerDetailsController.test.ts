import { handler } from '../src/controller/customerDetailsController'
// const handler = require('../src/controller/customerDetailsController')
import { CustomerDetailsService } from "../src/service/customerDetailsService"
// const CustomerDetailsService = require("../src/service/customerDetailsService")


jest.mock('../src/service/customerDetailsService');


describe('handler', () => {
    const customerDetailsService = new CustomerDetailsService(null);
    const getcustomerDetailsByIdSpy = jest.spyOn(customerDetailsService, 'getcustomerDetailsById');

    afterEach(() => {
        getcustomerDetailsByIdSpy.mockReset();
    });

    it('returns 400 error when customerId is not a number', async () => {
        const event = { pathParameters: { customerId: 'abc' } };
        const result = await handler(event);
        expect(result).toEqual({
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
            },
            body: JSON.stringify({ error: 'Invalid customer ID', status: 400 }),
            message: 'Invalid customer ID'
        });
    });

    it('returns 400 error when customerId is missing', async () => {
        const event = { pathParameters: {} };
        const result = await handler(event);
        expect(result.statusCode).toBe(400);
        expect(result.body).toContain('Invalid customer ID');
    });

    it('returns 400 error when customerId is not a number', async () => {
        const event = { pathParameters: { customerId: 'abc' } };
        const result = await handler(event);
        expect(result.statusCode).toBe(400);
        expect(result.body).toContain('Invalid customer ID');
    });

    it('returns 400 error when customerId is less than 6 characters', async () => {
        const event = { pathParameters: { customerId: '12345' } };
        const result = await handler(event);
        expect(result.statusCode).toBe(400);
        expect(result.body).toContain('Invalid customer ID');
    });

    it('returns 400 error when customerId is more than 6 characters', async () => {
        const event = { pathParameters: { customerId: '1234567' } };
        const result = await handler(event);
        expect(result.statusCode).toBe(400);
        expect(result.body).isContained('Invalid customer ID');
    });
    it('should return successful response with customer details', async () => {
        const event = { pathParameters: { customerId: '123456' } };
        getcustomerDetailsByIdSpy.mockResolvedValueOnce({ name: 'John Doe' });
        const response = await handler(event);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(JSON.stringify({ name: 'John Doe' }));
    });

    it('should catch and return internal server error on exception', async () => {
        getcustomerDetailsByIdSpy.mockRejectedValueOnce(new Error('Internal server error'));
        try {
            await handler({ pathParameters: { customerId: '123456' } })
        }
        catch (e) {
            console.log(e)
            throw e
        }
    });
});
