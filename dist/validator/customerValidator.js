"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
class Validators {
    checkCustomerId(customerId) {
        if (!customerId ||
            customerId.length < 7 ||
            customerId.length > 7 ||
            typeof customerId == "number") {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.Validators = Validators;
//# sourceMappingURL=customerValidator.js.map