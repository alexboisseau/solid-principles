import { Invoice } from "../classes/Invoice";

export interface IInvoicePersistence {
  save(invoice: Invoice): void;
}
