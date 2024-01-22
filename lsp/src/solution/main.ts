import { Rectangle } from "./classes/Rectangle";
import { Square } from "./classes/Square";
import assert from "node:assert/strict";

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

try {
  console.log("Second test : Square area should be equal to 4\n");

  const square: Square = new Square(5);
  square.setSide(2);
  const expectedArea: number = 4;

  assert(square.getArea() === expectedArea);
  console.log("✅ Passed\n");
} catch (error) {
  console.log("❌ Failed\n");
  console.log(error);
}
