# Violation of SRP

The `Invoice` class has three responsibilities:

1. Calculate the total price of the books
2. Print the invoice
3. Save the invoice to a file

However, the SRP states that a class should only have a single one responsibility, and therefore should have only one reason to change.
