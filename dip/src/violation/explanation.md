# Violation of DIP

Dependency Inversion Principle states that High-Level modules should depend on abstraction instead of concrete implementations.
However, in our code, `ShoppingCartPayment` depends directly on `StripePaymentProcessor`. What if we want to change our payment processor for Molly for example ? We will need to violate the OCP by modifying our `ShoppingCartPayment` whereas there is no good reason to update this class.
