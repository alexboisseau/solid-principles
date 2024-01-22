import { IPaymentProcessor } from "../ports/PaymentProcessor.interface";

export class StripePaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of ${amount} with Stripe`);
    return true;
  }
}
