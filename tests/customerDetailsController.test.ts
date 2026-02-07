import { CustomerDetailsController } from "../src/controller/customerDetailsController";
import { mockCustomerDetailsService } from "./mockServiceClass";

describe("ConsumptionDetailsService", () => {
  let service: CustomerDetailsController;

  beforeEach(() => {
    service = new CustomerDetailsController(mockCustomerDetailsService as any);
  });

  it("should get consumption details by ID", async () => {
    const event = {
      pathParameters: {
        customerId: "6793625",
      },
    };
    const customerId = "6793625";
    const expectedData = {
      customerId: "6793625",
      appliances: [
        {
          age: "12",
          applianceId: "26543264",
          applianceName: "Gas Cooker",
          category: "gas",
          manufactureDate: "2010-11-10",
        },
        {
          age: "10",
          applianceId: "26543265",
          applianceName: "Central heater",
          category: "electricity",
          manufactureDate: "2018-11-08",
        },
      ],
      email: "bukayosaka@example.com",
      firstName: "bukayo",
      lastName: "saka",
      phonenumber: "9983706456",
    };

    const result = await service.getCustomerDetailById(customerId);
    console.log("result", result);
    console.log("expect", expectedData);
    // expect(result).toEqual(expectedData);
  });

  it("employee data not found", async () => {
    const event = {
      pathParameters: {
        customerId: "6793625",
      },
    };

    const result = await service.getCustomerDetailById(event);
    expect(result.statusCode).toBe(404);
    const responseBody = JSON.parse(result.body as string);
    expect(responseBody.error).toBe("Employee Data Not Found");
  });
  it("invalid customer id id greater then 7", async () => {
    const event = {
      pathParameters: {
        customerId: "67936256",
      },
    };

    const result = await service.getCustomerDetailById(event);
    expect(result.statusCode).toBe(400);
    const responseBody = JSON.parse(result.body as string);
    expect(responseBody.error).toBe("Invalid Customer ID");
  });
  it("invalid customer id, id less then 7", async () => {
    const event = {
      pathParameters: {
        customerId: "679362",
      },
    };

    const result = await service.getCustomerDetailById(event);
    expect(result.statusCode).toBe(400);
    const responseBody = JSON.parse(result.body as string);
    expect(responseBody.error).toBe("Invalid Customer ID");
  });
  it("invalid customer Id empty string", async () => {
    const event = {
      pathParameters: {
        customerId: "",
      },
    };

    const result = await service.getCustomerDetailById(event);
    expect(result.statusCode).toBe(400);
    const responseBody = JSON.parse(result.body as string);
    expect(responseBody.error).toBe("Invalid Customer ID");
  });
  it("invalid customer Id is number ", async () => {
    const event = {
      pathParameters: {
        customerId: 6793625,
      },
    };

    const result = await service.getCustomerDetailById(event);
    expect(result.statusCode).toBe(400);
    const responseBody = JSON.parse(result.body as string);
    expect(responseBody.error).toBe("Invalid Customer ID");
  });
  //   it("invalid customer Id is number ", async () => {
  //     const event = {
  //       pathParameters: {
  //         customerId: 6793625,
  //       },
  //     };
  //     service.mockRejectedValue(new Error("Unexpected error"));
  //     const result = await service.getCustomerDetailById(event);
  //     expect(result.statusCode).toBe(400);
  //     const responseBody = JSON.parse(result.body as string);
  //     expect(responseBody.error).toBe("Invalid Customer ID");
  //   });
});

// import { CustomerDetailsController } from "../src/controller/customerDetailsController";
// import { CustomerDetailsService } from "../src/service/customerDetailsService"
// import { CustomerDetailsRepository } from "../src/repository/customerDetailsRepository"

// jest.mock('../src/service/customerDetailsService', () => {
//     return {
//         CustomerDetailsService: jest.fn().mockImplementation(() => {
//             return {
//                 getCustomerDetailsById: jest.fn()

//             };
//         })
//     };
// });

// jest.mock("../src/repository/customerDetailsRepository", () => {
//     return {
//         CustomerDetailsRepository: jest.fn().mockImplementation(() => {
//             return {
//                 getCustomerById: jest.fn().mockResolvedValue({
//                     "customerId": "3678905",
//                     "appliances": [
//                         {
//                             "age": "12",
//                             "applianceId": "26543260",
//                             "applianceName": "Gas Cooker",
//                             "category": "gas",
//                             "manufactureDate": "2012-11-17"
//                         },
//                         {
//                             "age": "10",
//                             "applianceId": "26543261",
//                             "applianceName": "Refrigerator",
//                             "category": "electricity",
//                             "manufactureDate": "2014-11-01"
//                         }
//                     ],
//                     "email": "stevejobs@gmail.com",
//                     "firstName": "Steve",
//                     "lastName": "Jobs",
//                     "phonenumber": "9080706050"

//                 }),

//             };
//         })
//     };
// });

// describe('handler', () => {
//     let mockGetCustomerDetailsById: jest.Mock;
//     beforeAll(() => {

//         mockGetCustomerDetailsById = new CustomerDetailsService(new CustomerDetailsRepository("mock-table-name")).getcustomerDetailsById as jest.Mock;

//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     test('should return 400 when customer id is less then 7', async () => {
//         const event = {
//             pathParameters: {
//                 customerId: '123453'
//             }
//         };

//         const response = await CustomerDetailsController(event);
//         expect(response.statusCode).toBe(400);
//         const responseBody = JSON.parse(response.body as string);
//         expect(responseBody.error).toBe('Invalid customer ID');
//     });
//     test('should return 400 when customer id is greater then 7', async () => {
//         const event = {
//             pathParameters: {
//                 customerId: '12345453'
//             }
//         };

//         const response = await handler(event);
//         expect(response.statusCode).toBe(400);
//         const responseBody = JSON.parse(response.body as string);
//         expect(responseBody.error).toBe('Invalid customer ID');
//     });
//     test('should return 400 when no customer id', async () => {
//         const event = {
//             pathParameters: {
//                 customerId: ''
//             }
//         };

//         const response = await handler(event);
//         expect(response.statusCode).toBe(400);
//         const responseBody = JSON.parse(response.body as string);
//         expect(responseBody.error).toBe('Invalid customer ID');
//     });
//     test('should return 500 when customer id is a number', async () => {
//         const event = {
//             pathParameters: {
//                 customerId: 123456
//             }
//         };

//         const response = await handler(event);
//         expect(response.statusCode).toBe(500);
//         const responseBody = JSON.parse(response.body as string);
//         expect(responseBody.error).toBe('Internal server error!');
//     });
//     test('should return 200 with data when customer id is a correct', async () => {
//         const event = {
//             pathParameters: {
//                 customerId: '3678905'
//             }
//         };
//         const expectedResult = {
//             "customerId": "3678905",
//             "appliances": [
//                 {
//                     "age": "12",
//                     "applianceId": "26543260",
//                     "applianceName": "Gas Cooker",
//                     "category": "gas",
//                     "manufactureDate": "2012-11-17"
//                 },
//                 {
//                     "age": "10",
//                     "applianceId": "26543261",
//                     "applianceName": "Refrigerator",
//                     "category": "electricity",
//                     "manufactureDate": "2014-11-01"
//                 }
//             ],
//             "email": "stevejobs@gmail.com",
//             "firstName": "Steve",
//             "lastName": "Jobs",
//             "phonenumber": "9080706050"

//         }

//         const response = await handler(event);
//         console.log('Response:', response.body);
//         expect(mockGetCustomerDetailsById).toHaveBeenCalledWith('3678905');
//         expect(response.statusCode).toBe(200);
//         expect(response.body).toEqual(expectedResult);
//     });

// });
