import { Entity } from "./Entity";

export class Character extends Entity {
  public attack(entity: Entity): void {
    console.log(`${this.name} attacked ${entity.name}`);
  }

  public move(): void {
    console.log(`${this.name} moved at ${this.movementSpeed} speed`);
  }

  public takeDamage(damage: number): void {
    console.log(`${this.name} took ${damage} damage`);
  }
}
