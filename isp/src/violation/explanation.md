# Violation of ISP

The Interface Segregation Principle states that a client shouldn't implement methods that he doesn't need.

However, in our code, the `Turret` have to implement the `move` method whereas a turret cannot move. Therefore, we can call this method but we take the risk to go through an error during the runtime.

Additionally, our Entity class is to big and also violate the SRP principle since it has more than one reason to change.
