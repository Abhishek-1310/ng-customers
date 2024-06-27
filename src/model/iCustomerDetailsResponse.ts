export interface CustomerDetailsResponse {
  customerId: string;
  appliances: Appliance[];
  email: string;
  firstName: string;
  lastName: string;
  phonenumber: string;
}

interface Appliance {
  age: string;
  applianceId: string;
  applianceName: string;
  category: string;
  manufactureDate: string;
  energyConsumption: string;
}

export interface CustomerData {
  metadata: object;
  items: CustomerDetailsResponse;
}
