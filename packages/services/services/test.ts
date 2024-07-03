import { PrismaClient } from "@cognito/database";

export class TestService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getTests(userId: string) {
    try {
      const tests = await this.prisma.test.findMany({
        where: {
          classes: {
            some: {
              schoolId: userId,
            },
          },
        },
        include: {
          classes: true,
        },
      });

      return { tests };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
