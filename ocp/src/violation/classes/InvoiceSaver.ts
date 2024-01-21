import { Invoice } from "./Invoice";

class InvoiceSaver {
  constructor(private readonly invoice: Invoice) {}

  public saveToFile(): void {
    console.log("Saving invoice to file...");
  }
}
