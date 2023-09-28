import { PrismaClient } from "@prisma/client";
import { BcryptService } from "./Bcrypt";

class Prisma extends PrismaClient {
  async onInit() {
    await this.$connect();
    super.$on("beforeExit", async () => {
      await this.$disconnect();
    });
  }
}

const prisma = new Prisma();

prisma.onInit().then((_) => {
  prisma.$use(async (params, next) => {
    if (params.model === "User" && /(create)/i.test(params.action)) {
      let hashed = await BcryptService.hash(params.args.data.password);

      params.args.data.password = hashed;
    }

    return next(params);
  });
});

export default prisma;
