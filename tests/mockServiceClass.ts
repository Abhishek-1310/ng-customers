import { MockCustomerDetailsService } from "./mockRepoInterface";

// mockConsumptionDetailsRepository.ts
export const mockCustomerDetailsService: MockCustomerDetailsService = {
  getcustomerDetailsById: jest.fn((customerId: string) => {
    // Return your mock data here
    return Promise.resolve({
      customerId: customerId,
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
    });
  }),
};
