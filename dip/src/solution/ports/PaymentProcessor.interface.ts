export interface IPaymentProcessor {
  processPayment(amount: number): boolean;
}
