import { IAttackable } from "../interfaces/Attackable.interface";
import { IDamageable } from "../interfaces/Damageable.interface";
import { IEntity } from "../interfaces/Entity.interface";
import { IMovable } from "../interfaces/Movable.interface";

export class Character implements IEntity, IAttackable, IDamageable, IMovable {
  constructor(
    public readonly name: string,
    public readonly attackDamage: number,
    public readonly speed: number,
    private health: number
  ) {}

  public attack(entity: IEntity): void {
    console.log(`${this.name} attacked ${entity.name}`);
  }

  public takeDamage(damage: number): void {
    console.log(`${this.name} took ${damage} damage`);
  }

  public move(): void {
    console.log(`${this.name} moved`);
  }

  public getHealth(): number {
    return this.health;
  }
}
