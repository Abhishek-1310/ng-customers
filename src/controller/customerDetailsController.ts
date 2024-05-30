import { CustomerDetailsService } from "../service/customerDetailsService"
import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";

export class CustomerDetailsController {
    private customerDetailsService: CustomerDetailsService;

    constructor(customerDetailsService: CustomerDetailsService) {
        this.customerDetailsService = customerDetailsService;
    }

    async getcustomerDetailsById(customerId: string): Promise<CustomerDetailsResponse> {
        return await this.customerDetailsService.getcustomerDetailsById(customerId);
    }

}

