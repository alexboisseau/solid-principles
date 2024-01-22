import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

export class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  public setSide(side: number): void {
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}
