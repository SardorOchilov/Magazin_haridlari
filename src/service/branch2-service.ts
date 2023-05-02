import { userRepository } from "../index";

export function branch2Service(phoneNumber: string, purchaseAmount: string) {
  userRepository.branch2Purchase(phoneNumber, "2000");
}
