"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branch1Service = void 0;
var index_1 = require("../index");
function branch1Service(phoneNumber, purchaseAmount) {
    index_1.userRepository.branch1Purchase(phoneNumber, '2000');
}
exports.branch1Service = branch1Service;
