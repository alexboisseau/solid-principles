import { IPaymentProcessor } from "../ports/PaymentProcessor.interface";

export class MollyPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of ${amount} with Molly`);
    return true;
  }
}
