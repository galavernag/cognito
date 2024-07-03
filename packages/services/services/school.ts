import { PrismaClient } from "@cognito/database";

export class SchoolService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getSchools(userId: string) {
    try {
      const schools = this.prisma.school.findMany({
        where: { members: { some: { id: userId } } },
      });

      return {
        schools,
      };
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  }
  async createSchool(name: string, domain: string) {
    const schoolAlreadyExistsWithDomain = await this.prisma.school.findFirst({
      where: {
        domain,
      },
    });

    if (schoolAlreadyExistsWithDomain) {
      return {
        error: "This domain is already in use",
      };
    }

    const school = await this.prisma.school.create({
      data: {
        name,
        domain,
      },
    });

    return {
      school,
    };
  }
}
