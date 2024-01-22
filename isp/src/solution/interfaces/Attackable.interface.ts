import { IEntity } from "./Entity.interface";

export interface IAttackable {
  readonly attackDamage: number;
  attack(entity: IEntity): void;
}
