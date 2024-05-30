"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetailsController = void 0;
class CustomerDetailsController {
    customerDetailsService;
    constructor(customerDetailsService) {
        this.customerDetailsService = customerDetailsService;
    }
    async getcustomerDetailsById(customerId) {
        return await this.customerDetailsService.getcustomerDetailsById(customerId);
    }
}
exports.CustomerDetailsController = CustomerDetailsController;
//# sourceMappingURL=customerDetailsController.js.map