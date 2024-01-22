import { MollyPaymentProcessor } from "./adapters/MollyPaymentProcessor";
import { StripePaymentProcessor } from "./adapters/StripePaymentProcessor";
import { Item } from "./classes/Item";
import { ShoppingCart } from "./classes/ShoppingCart";
import { ShoppingCartPayment } from "./classes/ShoppingCartPayment";
import { IPaymentProcessor } from "./ports/PaymentProcessor.interface";

const bread: Item = new Item("Bread", 10.0);
const water: Item = new Item("Water", 5.0);
const milk: Item = new Item("Milk", 15.0);

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(bread);
shoppingCart.addItem(water);
shoppingCart.addItem(milk);

const stripePaymentProcessor: IPaymentProcessor = new StripePaymentProcessor();
const mollyPaymentProcessor: IPaymentProcessor = new MollyPaymentProcessor();

// Payment with Stripe
const shoppingCartPayment = new ShoppingCartPayment(stripePaymentProcessor);
shoppingCartPayment.checkout(shoppingCart);

// Payment with Molly
const shoppingCartPayment2 = new ShoppingCartPayment(mollyPaymentProcessor);
shoppingCartPayment2.checkout(shoppingCart);
