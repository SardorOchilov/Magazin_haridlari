"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
var user_1 = require("./entities/user");
var user_repository_1 = require("./repository/user-repository");
var branch1_service_1 = require("./service/branch1-service");
var branch2_service_1 = require("./service/branch2-service");
exports.userRepository = new user_repository_1.UserRepository();
function init() {
    try {
        var user1 = new user_1.User("sardor", "974767471", "0");
        var user2 = new user_1.User("sardor", "974767472", "0");
        exports.userRepository.create(user1, user2);
        (0, branch1_service_1.branch1Service)("974767471", "2000");
        (0, branch1_service_1.branch1Service)("974767471", "2000");
        (0, branch2_service_1.branch2Service)("974767471", "2000");
        console.log(exports.userRepository.getList());
    }
    catch (err) {
        console.error(err.message);
    }
}
init();
