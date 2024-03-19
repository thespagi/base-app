import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { PlanetEndpoints } from "./planet.constants";
import { Planet } from "./planet.enum";

@Injectable()
export class PlanetClient {
  constructor(@Inject("CLIENT") private readonly client: ClientProxy) {}

  async getPlanet(id: number) {
    const response = await this.client.send(PlanetEndpoints.GET, { id }).toPromise();

    const { planet } = response;
    if (!planet) return null;

    return planet as Planet;
  }
}
