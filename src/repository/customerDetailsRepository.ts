import { getCustomerDetailsById } from "../mock/customerMockValue";
import { CustomerDetailsResponse } from "../model/iCustomerDetailsResponse";
import { CustomerData } from "../model/iCustomerDetailsResponse";

export class CustomerDetailsRepository {
  async getCustomerDetailsById(customerId: string): Promise<any> {
    const customerData = getCustomerDetailsById(customerId);
    return customerData;
  }
}
