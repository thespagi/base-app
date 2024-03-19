import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

const CLIENT = ClientsModule.register([
  {
    name: "CLIENT",
    transport: Transport.REDIS,
    options: {
      host: String(process.env.REDIS_HOST) || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
    },
  },
]);

@Global()
@Module({
  imports: [CLIENT],
  exports: [CLIENT],
})
export class ClientModule {}
