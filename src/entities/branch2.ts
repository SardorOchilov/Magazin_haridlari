export class branch2 {
  private ownerId: number;
  constructor(public purchase: string, public phoneNumber: string) {}

  addPurchaseAccount() {
    return +this.purchase;
  }

  setId(id: number) {
    this.ownerId = id;
  }
}
