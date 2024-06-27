import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";

export const mockCustomerDetails: CustomerDetailsResponse[] = [
  {
    customerId: "3678905",
    appliances: [
      {
        age: "12",
        applianceId: "26543260",
        applianceName: "Gas Cooker",
        category: "gas",
        manufactureDate: "2012-11-17",
        energyConsumption: "70KWH",
      },
      {
        age: "10",
        applianceId: "26543261",
        applianceName: "Refrigerator",
        category: "electricity",
        manufactureDate: "2014-11-01",
        energyConsumption: "70KWH",
      },
    ],
    email: "stevejobs@gmail.com",
    firstName: "Steve",
    lastName: "Jobs",
    phonenumber: "9080706050",
  },
  {
    customerId: "7676565",
    appliances: [
      {
        age: "12",
        applianceId: "26543262",
        applianceName: "Gas Cooker",
        category: "gas",
        manufactureDate: "2015-11-11",
        energyConsumption: "70KWH",
      },
      {
        age: "10",
        applianceId: "26543263",
        applianceName: "Boiler",
        category: "electricity",
        manufactureDate: "2012-11-04",
        energyConsumption: "70KWH",
      },
    ],
    email: "benwhite@example.com",
    firstName: "ben",
    lastName: "white",
    phonenumber: "9080785346",
  },
  {
    customerId: "6793625",
    appliances: [
      {
        age: "12",
        applianceId: "26543264",
        applianceName: "Gas Cooker",
        category: "gas",
        manufactureDate: "2010-11-10",
        energyConsumption: "70KWH",
      },
      {
        age: "10",
        applianceId: "26543265",
        applianceName: "Central heater",
        category: "electricity",
        manufactureDate: "2018-11-08",
        energyConsumption: "70KWH",
      },
    ],
    email: "bukayosaka@example.com",
    firstName: "bukayo",
    lastName: "saka",
    phonenumber: "9983706456",
  },
];

export function getCustomerDetailsById(customerId: string) {
  try {
    for (const customer of mockCustomerDetails) {
      if (customer.customerId === customerId) {
        return {
          metadata: { httpststuscode: 200 },
          Item: customer,
        };
      }
    }
    return {
      metadata: { httpststuscode: 404 },
    };
  } catch (error) {
    return {
      metadata: { httpststuscode: 500 },
    };
  }
}
