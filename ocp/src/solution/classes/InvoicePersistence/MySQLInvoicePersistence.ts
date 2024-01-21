import { IInvoicePersistence } from "../../interfaces/InvoicePersistence.interface";
import { Invoice } from "../Invoice";

export class MySQLInvoicePersistence implements IInvoicePersistence {
  save(invoice: Invoice) {
    console.log("Invoice saved to MySQL database");
  }
}
