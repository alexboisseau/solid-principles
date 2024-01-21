import { Book } from "./Book";

export class Invoice {
  private total: number = 0;

  constructor(
    public readonly books: Book[],
    public readonly discountRate: number,
    public readonly taxRate: number
  ) {
    this.total = this.calculateTotal();
  }

  private calculateTotal(): number {
    return (
      this.books.reduce((acc, book) => acc + book.price, 0) *
      (1 - this.discountRate) *
      (1 + this.taxRate)
    );
  }

  public getTotal(): number {
    return this.total;
  }
}
