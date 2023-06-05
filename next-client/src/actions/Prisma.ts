import { PrismaClient } from "@prisma/client";

class Prisma extends PrismaClient {
  async onInit() {
    await this.$connect();
    super.$on("beforeExit", async () => {
      await this.$disconnect();
    });
  }
}

const prisma = new Prisma();

prisma.onInit();

export default prisma;
