import { User } from "./entities/user";
import { UserRepository } from "./repository/user-repository";
import { branch1Service } from "./service/branch1-service";
import { branch2Service } from "./service/branch2-service";

export const userRepository = new UserRepository();

function init() {
  try {
    const user1 = new User("sardor", "974767471", "0");
    const user2 = new User("sardor", "974767472", "0");

    userRepository.create(user1, user2);  

    branch1Service("974767471", "2000");
    branch1Service("974767471", "2000");
    branch2Service("974767471", "2000");

    console.log(userRepository.getList());

  } catch (err: any) {
    console.error(err.message);
  }
}

init();
