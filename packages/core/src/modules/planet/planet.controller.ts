import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { PlanetService } from "./planet.service";
import { PlanetEndpoints } from "@thespagi/base-common";

@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @MessagePattern(PlanetEndpoints.GET)
  async getPlanet(data: { id: number }) {
    const { id } = data;
    const planet = this.planetService.getPlanet(id);
    return { planet };
  }
}
