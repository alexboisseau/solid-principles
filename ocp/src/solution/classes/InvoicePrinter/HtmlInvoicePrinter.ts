import { IInvoicePrinter } from "../../interfaces/InvoicePrinter.interface";
import { Invoice } from "../Invoice";

export class HtmlInvoicePrinter implements IInvoicePrinter {
  printInvoice(invoice: Invoice) {
    console.log(`
      <div>
        <h1>Invoice</h1>
      </div>
    `);
  }
}
