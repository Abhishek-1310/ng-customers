export interface MockCustomerDetailsRepository {
  getCustomerDetailsById(customerId: string): Promise<any>;
}

export interface MockCustomerDetailsService {
  getcustomerDetailsById(event: any): Promise<any>;
}
