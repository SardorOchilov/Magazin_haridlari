import { userRepository } from "..";
import { branch1 } from "../entities/branch1";
import { branch2 } from "../entities/branch2";
import { User } from "../entities/user";

export class UserRepository {
  private User: User[] = [];
  private branch1: branch1[] = [];
  private branch2: branch2[] = [];

  create(...users: User[]) {
    for (let user of users) {
      if (this.isExist(user.phoneNumber)) {
        throw new Error(`${user.phoneNumber} is exist`);
      }

      this.User.push(user);
      this.branch1.push(new branch1("0", user.phoneNumber));
      this.branch2.push(new branch2("0", user.phoneNumber));
    }
  }

  isExist(phoneNumber: string): boolean {
    for (let user of this.User) {
      if (phoneNumber === user.phoneNumber) return true;
    }

    return false;
  }

  getList() {
    return {
      Users: this.User,
      Branch1: this.branch1,
      Branch2: this.branch2,
    };
  }

  branch1Purchase(phoneNumber: string, purchaseAmount: string) {
    for (let user of this.branch1) {
      if (phoneNumber === user.phoneNumber) {
        let account = +user.purchase
        account += +purchaseAmount
        user.purchase = '' + account;
        this.totalPurchase(phoneNumber, purchaseAmount)
      }
    }
  }

  branch2Purchase(phoneNumber: string, purchaseAmount: string) {
    for (let user of this.branch2) {
      if (phoneNumber === user.phoneNumber) {
       let account = +user.purchase;
       account += +purchaseAmount;
       user.purchase = "" + account;
       this.totalPurchase(phoneNumber, purchaseAmount);
      }
    }
  }

  totalPurchase(phoneNumber: string, puchaseAmount: string){
    
    for (let user of this.User) {
      if (phoneNumber === user.phoneNumber) {
        let account = +user.totalPurchase;
        account += +puchaseAmount;
        user.totalPurchase = "" + account;
      }
    }
  }
}
