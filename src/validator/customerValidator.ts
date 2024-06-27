export class Validators {
  checkCustomerId(customerId: string): boolean {
    if (
      !customerId ||
      customerId.length < 7 ||
      customerId.length > 7 ||
      typeof customerId == "number"
    ) {
      return false;
    } else {
      return true;
    }
  }
}
