import { Item } from "./classes/Item";
import { ShoppingCart } from "./classes/ShoppingCart";
import { ShoppingCartPayment } from "./classes/ShoppingCartPayment";
import { StripePaymentProcessor } from "./classes/StripePaymentProcessor";

const bread: Item = new Item("Bread", 10.0);
const water: Item = new Item("Water", 5.0);
const milk: Item = new Item("Milk", 15.0);

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(bread);
shoppingCart.addItem(water);
shoppingCart.addItem(milk);

const paymentProcessor = new StripePaymentProcessor();
const shoppingCartPayment = new ShoppingCartPayment(paymentProcessor);
