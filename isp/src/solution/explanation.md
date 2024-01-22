# Solution to respect ISP

Interface Segregation Principle states that a client shouldn't have to implement methods that it doesn't need.

To solve our problem, we break down the `Entity` class into a small interface `IEntity` with only the common property between our `Character` and `Turret` class : `name`.

We define other interfaces :

- `IAttackable`
- `IMovable`
- `IDamageable`

These interfaces are very smalls and define only needed methods.
