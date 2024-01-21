import { IInvoicePrinter } from "../../interfaces/InvoicePrinter.interface";
import { Invoice } from "../Invoice";

class InvoicePrinter {
  constructor(
    private readonly invoice: Invoice,
    private readonly printer: IInvoicePrinter
  ) {}

  public printInvoice(): void {
    this.printer.printInvoice(this.invoice);
  }
}
