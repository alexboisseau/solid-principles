import { Book } from "./Book";

/**
 * VIALATION OF SRP
 *
 * The Invoice class has three responsibilities:
 * 1. Calculate the total price of the books
 * 2. Print the invoice
 * 3. Save the invoice to a file
 *
 * However, to respect the SRP, the Invoice class should only have one responsibility, and therefore has only one reason to change.
 */
class Invoice1 {
  private total: number = 0;

  constructor(
    private readonly books: Book[],
    private readonly discountRate: number,
    private readonly taxRate: number
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

  public printInvoice(): void {
    console.log("Invoice");
    console.log("-------");
    this.books.forEach((book) => {
      console.log(`${book.title} - ${book.price}`);
    });
    console.log("-------");
    console.log(`Discount: ${this.discountRate}`);
    console.log("-------");
    console.log(`Tax: ${this.taxRate}`);
    console.log("-------");
    console.log(`Total: ${this.total}`);
  }

  public saveToFile(): void {
    console.log("Saving invoice to file...");
  }
}
