# Solution to respect SRP

Create three classes with one responsibility each:

1. The `Invoice` class has only one responsibility: calculate the total price of the books.
2. The `InvoicePrinter` class has only one responsibility: print the invoice.
3. The `InvoiceSaver` class has only one responsibility: save the invoice to a file.

With this separation of responsibilities, we respect the SRP.
