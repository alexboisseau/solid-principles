export abstract class Entity {
  constructor(
    public readonly name: string,
    public readonly attackDamage: number,
    public readonly movementSpeed: number,
    private health: number
  ) {}

  public abstract attack(entity: Entity): void;
  public abstract move(): void;
  public abstract takeDamage(damage: number): void;

  public getHealth(): number {
    return this.health;
  }
}
