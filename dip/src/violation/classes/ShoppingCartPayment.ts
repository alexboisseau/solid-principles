import { ShoppingCart } from "./ShoppingCart";
import { StripePaymentProcessor } from "./StripePaymentProcessor";

export class ShoppingCartPayment {
  constructor(
    private readonly stripePaymentProcessor: StripePaymentProcessor
  ) {}

  public checkout(shoppingCart: ShoppingCart) {
    // Process items in shopping cart
    const totalPrice = shoppingCart.getTotalPrice();
    this.stripePaymentProcessor.processPayment(totalPrice);
  }
}
