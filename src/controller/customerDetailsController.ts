import { CustomerDetailsService } from "../service/customerDetailsService";
import { StatusCode, MESSAGES } from "../constant/constants";
import { Validators } from "../validator/customerValidator";
import { ResponseHandler } from "../builder/response-builder";
import { jwt } from "jsonwebtoken";
const validators = new Validators();

function getTokenFromEvent(event: any): string | null {
  const authorizationHeader = event.headers?.Authorization || "";
  if (authorizationHeader.startsWith("Bearer ")) {
    return authorizationHeader.split(" ")[1];
  }
  return null;
}

export class CustomerDetailsController {
  private customerDetailsService: CustomerDetailsService;

  constructor(customerDetailsService: CustomerDetailsService) {
    this.customerDetailsService = customerDetailsService;
  }

  async getCustomerDetailById(event) {
    try {
      const jwtToken = getTokenFromEvent(event);
      console.log(jwtToken);
      const decodedToken: any = jwt.verify(jwtToken, "abhishek");

      const customerid = decodedToken.customer_id;
      const expirationTime = decodedToken.exp;
      const customerId = event.pathParameters?.customerId;

      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (currentTimestamp > expirationTime) {
        return ResponseHandler.createErrorResponse(
          StatusCode.UNAUTHORIZED,
          MESSAGES.SESSION_EXPIRED
        );
      }
      if (customerid != customerId) {
        return ResponseHandler.createErrorResponse(
          StatusCode.UNAUTHORIZED,
          MESSAGES.UNAUTHORIZED
        );
      }
      if (!validators.checkCustomerId(customerId)) {
        return ResponseHandler.createErrorResponse(
          StatusCode.BAD_REQUEST,
          MESSAGES.INVALID_CUSTOMER_ID
        );
      }
      const getCustomer: any =
        await this.customerDetailsService.getcustomerDetailsById(customerId);

      if (!getCustomer.Item) {
        return ResponseHandler.createErrorResponse(
          StatusCode.NOT_FOUND,
          MESSAGES.DATA_NOT_FOUND
        );
      }

      return ResponseHandler.createSuccessResponse(getCustomer);
    } catch (error) {
      return ResponseHandler.createErrorResponse(
        StatusCode.INTERNAL_SERVER_ERROR,
        MESSAGES.FAILED_TO_GET_DATA
      );
    }
  }
}

// async getCustomerDetailById(event) {
//     try {
//       const customerId = event.pathParameters?.customerId;
//       const tokenCustomerId = event.token?.customerId;

//       if (tokenCustomerId === customerId) {
//         if (!validators.checkCustomerId(customerId)) {
//           return ResponseHandler.createErrorResponse(
//             StatusCode.BAD_REQUEST,
//             MESSAGES.INVALID_CUSTOMER_ID
//           );
//         }
//         const getCustomer: any =
//           await this.customerDetailsService.getcustomerDetailsById(customerId);

//         if (!getCustomer.Item) {
//           return ResponseHandler.createErrorResponse(
//             StatusCode.NOT_FOUND,
//             MESSAGES.DATA_NOT_FOUND
//           );
//         }

//         return ResponseHandler.createSuccessResponse(getCustomer);
//       } else {
//         return ResponseHandler.createErrorResponse(
//           StatusCode.UNAUTHORIZED,
//           MESSAGES.UNAUTHORIZED
//         );
//       }
//     } catch (error) {
//       return ResponseHandler.createErrorResponse(
//         StatusCode.INTERNAL_SERVER_ERROR,
//         MESSAGES.FAILED_TO_GET_DATA
//       );
//     }
//   }
