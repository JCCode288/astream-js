import { PrismaClient } from "@prisma/client";
import { BcryptService } from "./Bcrypt";

class Prisma extends PrismaClient {
  constructor() {
    super();
    this.onInit();
  }
  async onInit() {
    await this.$connect();

    this.$use(async (params, next) => {
      if (params.model === "User" && /(create)/i.test(params.action)) {
        let hashed = await BcryptService.hash(params.args.data.password);

        params.args.data.password = hashed;
      }

      return next(params);
    });

    super.$on("beforeExit", async () => {
      await this.$disconnect();
    });
  }

  ownKeys(target: any) {
    return Object.keys(target);
  }
}

const prisma = new Prisma();

export default prisma;
