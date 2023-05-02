"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var branch1_1 = require("../entities/branch1");
var branch2_1 = require("../entities/branch2");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.User = [];
        this.branch1 = [];
        this.branch2 = [];
    }
    UserRepository.prototype.create = function () {
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
            var user = users_1[_a];
            if (this.isExist(user.phoneNumber)) {
                throw new Error("".concat(user.phoneNumber, " is exist"));
            }
            this.User.push(user);
            this.branch1.push(new branch1_1.branch1("0", user.phoneNumber));
            this.branch2.push(new branch2_1.branch2("0", user.phoneNumber));
        }
    };
    UserRepository.prototype.isExist = function (phoneNumber) {
        for (var _i = 0, _a = this.User; _i < _a.length; _i++) {
            var user = _a[_i];
            if (phoneNumber === user.phoneNumber)
                return true;
        }
        return false;
    };
    UserRepository.prototype.getList = function () {
        return {
            Users: this.User,
            Branch1: this.branch1,
            Branch2: this.branch2,
        };
    };
    UserRepository.prototype.branch1Purchase = function (phoneNumber, purchaseAmount) {
        for (var _i = 0, _a = this.branch1; _i < _a.length; _i++) {
            var user = _a[_i];
            if (phoneNumber === user.phoneNumber) {
                var account = +user.purchase;
                account += +purchaseAmount;
                user.purchase = '' + account;
                this.totalPurchase(phoneNumber, purchaseAmount);
            }
        }
    };
    UserRepository.prototype.branch2Purchase = function (phoneNumber, purchaseAmount) {
        for (var _i = 0, _a = this.branch2; _i < _a.length; _i++) {
            var user = _a[_i];
            if (phoneNumber === user.phoneNumber) {
                var account = +user.purchase;
                account += +purchaseAmount;
                user.purchase = "" + account;
                this.totalPurchase(phoneNumber, purchaseAmount);
            }
        }
    };
    UserRepository.prototype.totalPurchase = function (phoneNumber, puchaseAmount) {
        for (var _i = 0, _a = this.User; _i < _a.length; _i++) {
            var user = _a[_i];
            if (phoneNumber === user.phoneNumber) {
                var account = +user.totalPurchase;
                account += +puchaseAmount;
                user.totalPurchase = "" + account;
            }
        }
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
