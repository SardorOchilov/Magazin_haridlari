"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branch1 = void 0;
var branch1 = /** @class */ (function () {
    function branch1(purchase, phoneNumber) {
        this.purchase = purchase;
        this.phoneNumber = phoneNumber;
    }
    branch1.prototype.addPurchaseAccount = function () {
        return +this.purchase;
    };
    return branch1;
}());
exports.branch1 = branch1;
