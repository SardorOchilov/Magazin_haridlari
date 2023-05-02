"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branch2 = void 0;
var branch2 = /** @class */ (function () {
    function branch2(purchase, phoneNumber) {
        this.purchase = purchase;
        this.phoneNumber = phoneNumber;
    }
    branch2.prototype.addPurchaseAccount = function () {
        return +this.purchase;
    };
    branch2.prototype.setId = function (id) {
        this.ownerId = id;
    };
    return branch2;
}());
exports.branch2 = branch2;
