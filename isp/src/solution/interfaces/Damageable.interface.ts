export interface IDamageable {
  getHealth(): number;
  takeDamage(damage: number): void;
}
