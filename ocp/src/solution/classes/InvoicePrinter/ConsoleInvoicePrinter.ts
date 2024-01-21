import { IInvoicePrinter } from "../../interfaces/InvoicePrinter.interface";
import { Invoice } from "../Invoice";

export class ConsoleInvoicePrinter implements IInvoicePrinter {
  printInvoice(invoice: Invoice) {
    console.log("Invoice");
    console.log("-------");
    invoice.books.forEach((book) => {
      console.log(`${book.title} - ${book.price}`);
    });
    console.log("-------");
    console.log(`Discount: ${invoice.discountRate}`);
    console.log("-------");
    console.log(`Tax: ${invoice.taxRate}`);
    console.log("-------");
    console.log(`Total: ${invoice.getTotal()}`);
  }
}
