# Solution to respect OCP

We often use interfaces and/or abstract classes to respect this principle and this is what we have done in our Invoice project.

For our persistence, we have:

- One interface : `IInvoicePersistence` with a `save`` method
- Two classes which implement this interface : `MySQLInvoicePersistence` & `FileSystemPersistence`
- `InvoicePersistence` class which will receive in his constructor a class which implement the `IInvoicePersistence`

We also have the same logic for the Printer :

- One interface : `IInvoicePrinter` with a `save`` method
- Two classes which implement this interface : `ConsoleInvoicePrinter` & `HtmlPrinterInvoice`
- `InvoicePrinter` class which will receive in his constructor a class which implement the `IInvoicePrinter`

Thanks to this design, in the future, we will be able to add another way to persist our invoice or another way to print our invoice without to modify our existing code.
