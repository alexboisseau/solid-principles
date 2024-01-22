import { Rectangle } from "./classes/Rectangle";
import assert from "node:assert/strict";
import { Square } from "./classes/Square";

try {
  console.log("First test : Rectangle area should be equal to 20\n");

  const rectangle: Rectangle = new Rectangle(2, 3);
  rectangle.setWidth(2);
  rectangle.setHeight(10);
  const expectedArea: number = 20;

  assert(rectangle.getArea() === expectedArea);
  console.log("✅ Passed\n");
} catch (error) {
  console.log("❌ Failed\n");
  console.log(error);
}

// This test will fail because the Square class violates the Liskov Substitution Principle,
// when we set the width of the square, we also set the height to the same value, which is not the case for the Rectangle class.
try {
  console.log("Second test : Square area should be equal to 20\n");

  const square: Rectangle = new Square(5);
  square.setWidth(2);
  square.setHeight(10);
  const expectedArea: number = 20;

  assert(square.getArea() === expectedArea);
  console.log("✅ Passed\n");
} catch (error) {
  console.log("❌ Failed\n");
  console.log(error);
}
