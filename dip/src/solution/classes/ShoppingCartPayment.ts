import { IPaymentProcessor } from "../ports/PaymentProcessor.interface";
import { ShoppingCart } from "./ShoppingCart";

export class ShoppingCartPayment {
  constructor(private readonly stripePaymentProcessor: IPaymentProcessor) {}

  public checkout(shoppingCart: ShoppingCart) {
    // Process items in shopping cart
    const totalPrice = shoppingCart.getTotalPrice();
    this.stripePaymentProcessor.processPayment(totalPrice);
  }
}
