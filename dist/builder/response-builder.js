"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCustomerResponse = void 0;
const buildCustomerResponse = (customer) => {
    const getCustomerJsonApi = {
        "jsonapi": {
            "version": "1.0"
        },
        "data": {
            "type": "customers",
            "attributes": {
                "customerId": customer.Item.customerId,
                "firstName": customer.Item.firstName,
                "lastName": customer.Item.lastName,
                "phonenumber": customer.Item.phonenumber,
                "email": customer.Item.email,
                "list_of_appliances": customer.Item.appliances.map(appliance => ({
                    applianceId: appliance.applianceId,
                    manufactureDate: appliance.manufactureDate,
                    applianceName: appliance.applianceName,
                    category: appliance.category,
                    age: appliance.age,
                }))
            }
        }
    };
    return getCustomerJsonApi;
};
exports.buildCustomerResponse = buildCustomerResponse;
//# sourceMappingURL=response-builder.js.map