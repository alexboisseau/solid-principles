import { Invoice } from "../classes/Invoice";

export interface IInvoicePrinter {
  printInvoice(invoice: Invoice): void;
}
