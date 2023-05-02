"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branch2Service = void 0;
var index_1 = require("../index");
function branch2Service(phoneNumber, purchaseAmount) {
    index_1.userRepository.branch2Purchase(phoneNumber, "2000");
}
exports.branch2Service = branch2Service;
