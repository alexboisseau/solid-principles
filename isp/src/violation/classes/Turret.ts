import { Entity } from "./Entity";

export class Turret extends Entity {
  public attack(entity: Entity): void {
    console.log(`${this.name} attacked ${entity.name}`);
  }

  public takeDamage(damage: number): void {
    console.log(`${this.name} took ${damage} damage`);
  }

  /*
    Outch, this is not good. Turret cannot move, but it has to implement the method from Entity.
  */
  public move(): void {
    throw new Error("Turret cannot move");
  }
}
