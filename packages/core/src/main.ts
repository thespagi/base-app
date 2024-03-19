import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";
import { ConfigModule } from "@nestjs/config";

async function bootstrap() {
  ConfigModule.forRoot();

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: String(process.env.REDIS_HOST) || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
    },
  });

  await app.listen();
}

bootstrap();
