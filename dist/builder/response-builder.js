"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
const constants_1 = require("../constant/constants");
// response-handler.ts
class ResponseHandler {
  static createErrorResponse(statusCode, errorMessage) {
    return {
      statusCode: statusCode,
      headers: constants_1.HEADERS,
      body: JSON.stringify({ error: errorMessage }),
    };
  }
  static createSuccessResponse(body) {
    return {
      statusCode: constants_1.StatusCode.OK,
      headers: constants_1.HEADERS,
      body: JSON.stringify(getCustomerJsonApi(body)),
    };
  }
}
exports.ResponseHandler = ResponseHandler;
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
//# sourceMappingURL=response-builder.js.map
