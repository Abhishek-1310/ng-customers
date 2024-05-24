import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";

export const buildCustomerResponse = (getCustomer: CustomerDetailsResponse) => {
    const getCustomerJsonApi = {
        "jsonapi": {
            "version": "1.0"
        },
        "data": {
            "type": "customers",
            "attributes": {
                "customerId": getCustomer.customerId,
                "firstName": getCustomer.firstName,
                "lastName": getCustomer.lastName,
                "phonenumber": getCustomer.phonenumber,
                "email": getCustomer.email,
                "list_of_appliances": getCustomer.appliances.map(appliance => ({
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


