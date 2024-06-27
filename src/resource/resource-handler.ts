import { CustomerDetailsRepository } from "../repository/customerDetailsRepository";
import { CustomerDetailsService } from "../service/customerDetailsService";
import { CustomerDetailsController } from "../controller/customerDetailsController";
import { jwt } from "jsonwebtoken";

const customerDetailsRepository = new CustomerDetailsRepository();
const customerDetailsService = new CustomerDetailsService(
  customerDetailsRepository
);
const customerDetailsController = new CustomerDetailsController(
  customerDetailsService
);

const token = generateJwtToken("6793625", "stevejobs@gmail.com");

const event = {
  httpMethod: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  queryStringParameters: null,
  pathParameters: {
    customerId: "6793625",
  },
  body: null,
};

export const handler = async (event) => {
  const response = await customerDetailsController.getCustomerDetailById(event);
  console.log(response);
};
handler(event);
// export const handler = async (event, context, callback) => {
//   const customerId = event.pathParameters.customerId;
//   const response = await customerDetailsController.getCustomerDetailById(
//     customerId
//   );
//   callback(null, response);
// };

function generateJwtToken(customerId: string, username: string): string {
  const secretKey = "abhishek"; // Replace with your actual secret key
  const expirationTime = 900; // 15 minutes from now

  const payload = {
    customer_id: customerId,
    username: username,
    exp: expirationTime,
  };

  return jwt.sign(payload, secretKey);
}
