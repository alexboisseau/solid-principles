# Violation of OCP

The Open-Closed Principle states that our code should be open to extension and closed to modification. What does that mean ? It means that we should be able to add a new functionality without touching our existing code.

However, let's say that we would like to save our invoice in a database, how could we achieve that ? With our current implementation, we should add a new method into the `InvoiceSaver` class : `saveToDatabase` for example. Same thing for the `InvoicePrinter.printInvoice`.

If we need to modify our existing code, it's that we violate the OCP.
