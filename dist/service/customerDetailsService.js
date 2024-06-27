"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetailsService = void 0;
class CustomerDetailsService {
    customerDetailsRepository;
    constructor(customerDetailsRepository) {
        this.customerDetailsRepository = customerDetailsRepository;
    }
    async getcustomerDetailsById(customerId) {
        return await this.customerDetailsRepository.getCustomerDetailsById(customerId);
    }
}
exports.CustomerDetailsService = CustomerDetailsService;
//# sourceMappingURL=customerDetailsService.js.map