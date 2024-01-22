# Violation of LSP

In this example, we create a `Rectangle` class and a `Square` class which extends the `Rectangle`. Even if a square in its final form is a rectangle with same width and same height, they don't have the same comportment. So we can't expect the same result if we start with a `Rectangle`, make some operations, than if we start from a `Square`. Maybe that we could have the same result, but we can't be sure.

Example 1:

1. We create a Rectangle with a width of `5` and a height of `5`
2. We create a Square with a side of `5`
   => We made some operations to set width/height/side and the `getArea` method will return `25` for both of them.

Example 2:

1. We create a Rectangle with a width of `5` and a height of `10`
2. We create a Square with a side of `5`
   => We made some operations to set width/height/side and the `getArea` method will not return the same result for both of them (`50` && 25).

However, the Liskov Substitution Principle requires that a class `B` which is a subclass of class `A` should be able to be pass in any place where an object of type A is expected.
