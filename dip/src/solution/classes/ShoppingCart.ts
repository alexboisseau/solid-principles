import { Item } from "./Item";

export class ShoppingCart {
  constructor(public readonly items: Item[] = []) {}

  addItem(item: Item) {
    this.items.push(item);
  }

  public getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}
