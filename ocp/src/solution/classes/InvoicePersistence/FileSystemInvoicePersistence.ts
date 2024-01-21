import { IInvoicePersistence } from "../../interfaces/InvoicePersistence.interface";
import { Invoice } from "../Invoice";

export class FileSystemInvoicePersistence implements IInvoicePersistence {
  save(invoice: Invoice) {
    console.log("Invoice saved to the file system");
  }
}
