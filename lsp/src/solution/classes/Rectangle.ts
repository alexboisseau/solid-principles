import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(protected width: number, protected height: number) {
    super();
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}
