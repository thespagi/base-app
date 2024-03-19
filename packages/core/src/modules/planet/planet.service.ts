import { Injectable } from "@nestjs/common";
import { Planet } from "@thespagi/base-common";

@Injectable()
export class PlanetService {
  planets: Planet[] = [
    Planet.Mercury,
    Planet.Venus,
    Planet.Earth,
    Planet.Mars,
    Planet.Jupiter,
    Planet.Saturn,
    Planet.Uranus,
    Planet.Neptune,
    Planet.Pluto,
  ];

  getPlanet(id: number) {
    const idInRange = id >= 1 && id <= this.planets.length;
    return idInRange ? this.planets[id - 1] : null;
  }
}
