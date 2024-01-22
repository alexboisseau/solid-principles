import { Character } from "./classes/Character";
import { Turret } from "./classes/Turret";

const knight: Character = new Character("Knight", 10, 3, 100);
const turret: Turret = new Turret("Turret", 100, 0, 100);

knight.move();
knight.attack(turret);

turret.attack(knight);
turret.move(); // This should not be possible, however, we can call the method ... We are going to receive an error at runtime and not during the development phase.
