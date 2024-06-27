"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetailsRepository = void 0;
const customerMockValue_1 = require("../mock/customerMockValue");
class CustomerDetailsRepository {
    async getCustomerDetailsById(customerId) {
        const customerData = (0, customerMockValue_1.getCustomerDetailsById)(customerId);
        return customerData;
    }
}
exports.CustomerDetailsRepository = CustomerDetailsRepository;
//# sourceMappingURL=customerDetailsRepository.js.map