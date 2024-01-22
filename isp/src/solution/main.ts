import { Character } from "./classes/Character";
import { Turret } from "./classes/Turret";

const knight: Character = new Character("Knight", 10, 3, 50);
const turret: Turret = new Turret("Turret", 30, 100);

knight.move();
knight.attack(turret);

turret.attack(knight);
//turret.move(); Now, it's just impossible to call this method.
