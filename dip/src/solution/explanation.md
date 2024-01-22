# Solution to respect DIP

To respect the Dependency Inversion Principle, we have used the ports/adapters pattern. Ports are interfaces which will be used in our High-Level modules and Adapters are concrete implementation (Low-Level modules) that can be used with the dependency injection.

Our High-Level module `ShoppingCartPayment` depends on `IPaymentProcessor` instead of a concrete implementation.
Thanks to this, we will be able to add others payment processor in the future without to change this class.
