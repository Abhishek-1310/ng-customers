import { CustomerDetailsRepository } from "../src/repository/customerDetailsRepository";
import { getCustomerDetailsById } from "./mockclass";

describe("CustomerDetailsRepository", () => {
  const customerId = "6793625";
  const customerData = {
    customerId,
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

  beforeEach(() => {
    (getCustomerDetailsById as jest.Mock).mockResolvedValue(customerData);
  });

  it("should return customer details by id", async () => {
    const repository = new CustomerDetailsRepository();
    const result = await repository.getCustomerDetailsById(customerId);
    console.log(result);
    expect(result.Item).toEqual(customerData);
  });
});
