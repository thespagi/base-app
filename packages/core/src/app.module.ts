import { Module } from "@nestjs/common";
import { PlanetModule } from "./modules/planet/planet.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { ClientModule } from "./other/client/client.module";

@Module({
  imports: [ClientModule, PlanetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
