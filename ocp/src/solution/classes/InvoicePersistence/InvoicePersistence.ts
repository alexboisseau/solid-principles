import { IInvoicePersistence } from "../../interfaces/InvoicePersistence.interface";
import { Invoice } from "../Invoice";

export class InvoicePersistence {
  constructor(private readonly persistence: IInvoicePersistence) {}

  save(invoice: Invoice) {
    this.persistence.save(invoice);
  }
}
