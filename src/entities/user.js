"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, phoneNumber, totalPurchase) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.totalPurchase = totalPurchase;
    }
    User.prototype.gatherPurchase = function () {
    };
    return User;
}());
exports.User = User;
