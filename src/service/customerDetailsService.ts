import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";
import { CustomerDetailsRepository } from "../repository/customerDetailsRepository"

export class CustomerDetailsService {
    private customerDetailsRepository: CustomerDetailsRepository;

    constructor(customerDetailsRepository: CustomerDetailsRepository) {
        this.customerDetailsRepository = customerDetailsRepository;
    }

    async getcustomerDetailsById(customerId: string): Promise<CustomerDetailsResponse> {
        return await this.customerDetailsRepository.getCustomerDetailsById(customerId);
    }

}