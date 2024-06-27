"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const customerDetailsRepository_1 = require("../repository/customerDetailsRepository");
const customerDetailsService_1 = require("../service/customerDetailsService");
const customerDetailsController_1 = require("../controller/customerDetailsController");

const jwt = require("jsonwebtoken");
const customerDetailsRepository =
  new customerDetailsRepository_1.CustomerDetailsRepository();
const customerDetailsService =
  new customerDetailsService_1.CustomerDetailsService(
    customerDetailsRepository
  );
const customerDetailsController =
  new customerDetailsController_1.CustomerDetailsController(
    customerDetailsService
  );
// const token = generateJwtToken("6793625", "stevejobs@gmail.com");
// const event = {
//   httpMethod: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     expires_in: 120,
//   },
//   queryStringParameters: null,
//   pathParameters: {
//     customerId: "6793625",
//   },
//   body: null,
// };
// const handler = async (event) => {
//   const response = await customerDetailsController.getCustomerDetailById(event);
//   console.log(response);
// };
export const handler = async (event, context, callback) => {
  const customerId = event.pathParameters.customerId;
  const response = await customerDetailsController.getCustomerDetailById(
    customerId
  );
  callback(null, response);
};
exports.handler = handler;
(0, exports.handler)(event);

// function generateJwtToken(customerId, username) {
//   const secretKey = "nextgen";
//   const payload = {
//     customer_id: customerId,
//     username: username,
//   };
//   return jwt.sign(payload, secretKey, {
//     expiresIn: 120,
//   });
// }
//# sourceMappingURL=resource-handler.js.map
