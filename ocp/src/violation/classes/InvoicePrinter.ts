import { Invoice } from "./Invoice";

class InvoicePrinter {
  constructor(private readonly invoice: Invoice) {}

  public printInvoice(): void {
    console.log("Invoice");
    console.log("-------");
    this.invoice.books.forEach((book) => {
      console.log(`${book.title} - ${book.price}`);
    });
    console.log("-------");
    console.log(`Discount: ${this.invoice.discountRate}`);
    console.log("-------");
    console.log(`Tax: ${this.invoice.taxRate}`);
    console.log("-------");
    console.log(`Total: ${this.invoice.getTotal()}`);
  }
}
