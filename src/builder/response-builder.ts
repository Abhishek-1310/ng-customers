import { HEADERS, StatusCode } from "../constant/constants";

// response-handler.ts
export class ResponseHandler {
  static createErrorResponse(statusCode: number, errorMessage: string) {
    return {
      statusCode: statusCode,
      headers: HEADERS,
      body: JSON.stringify({ error: errorMessage }),
    };
  }

  static createSuccessResponse(body: any) {
    return {
      statusCode: StatusCode.OK,
      headers: HEADERS,
      body: JSON.stringify(getCustomerJsonApi(body)),
    };
  }
}

const getCustomerJsonApi = (customer) => {
  return {
    jsonapi: {
      version: "1.0",
    },
    data: {
      type: "customers",
      attributes: {
        customerId: customer.Item.customerId,
        firstName: customer.Item.firstName,
        lastName: customer.Item.lastName,
        phonenumber: customer.Item.phonenumber,
        email: customer.Item.email,
        list_of_appliances: customer.Item.appliances.map((appliance) => ({
          applianceId: appliance.applianceId,
          manufactureDate: appliance.manufactureDate,
          applianceName: appliance.applianceName,
          category: appliance.category,
          age: appliance.age,
          energyConsumption: appliance.energyConsumption,
        })),
      },
    },
  };
};
