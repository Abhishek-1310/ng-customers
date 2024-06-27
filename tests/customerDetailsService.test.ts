// consumptionDetailsService.test.ts
import { CustomerDetailsService } from "../src/service/customerDetailsService";
import { mockCustomerDetailsRepository } from "./mockRepoClass";

describe("ConsumptionDetailsService", () => {
  let service: CustomerDetailsService;

  beforeEach(() => {
    service = new CustomerDetailsService(mockCustomerDetailsRepository as any);
  });

  it("should get consumption details by ID", async () => {
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

    const result = await service.getcustomerDetailsById(customerId);
    expect(result).toEqual(expectedData);
  });
});
