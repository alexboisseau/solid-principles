export class Item {
  constructor(public readonly name: string, public readonly price: number) {}

  getPrice() {
    return this.price;
  }
}
