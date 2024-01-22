import { IAttackable } from "../interfaces/Attackable.interface";
import { IDamageable } from "../interfaces/Damageable.interface";
import { IEntity } from "../interfaces/Entity.interface";

export class Turret implements IEntity, IAttackable, IDamageable {
  constructor(
    public readonly name: string,
    public readonly attackDamage: number,
    private health: number
  ) {}

  public attack(entity: IEntity): void {
    console.log(`${this.name} attacked ${entity.name}`);
  }

  public takeDamage(damage: number): void {
    console.log(`${this.name} took ${damage} damage`);
  }

  public getHealth(): number {
    return this.health;
  }
}
