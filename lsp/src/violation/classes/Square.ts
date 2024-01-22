import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  public setHeight(height: number): void {
    this.width = height;
    this.height = height;
  }
}
