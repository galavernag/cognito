import { PrismaClient } from "@cognito/database";

export class InviteService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createInvite(userId: string, schoolId: string, expiresAt: Date) {
    try {
      const invite = await this.prisma.invite.create({
        data: {
          createdBy: {
            connect: {
              id: userId,
            },
          },
          school: {
            connect: {
              id: schoolId,
            },
          },
          expiresAt,
        },
      });

      return {
        invite,
      };
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  }

  async useInvite(userId: string, code: string) {
    try {
      const invite = await this.prisma.invite.findFirst({
        where: {
          code,
          expiresAt: {
            gte: new Date(),
          },
          isUsed: {
            not: true,
          },
        },
      });

      if (!invite) {
        return {
          error: "Invite not found",
        };
      }

      await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          schools: {
            connect: {
              id: invite.schoolId,
            },
          },
        },
      });

      await this.prisma.invite.update({
        where: {
          id: invite.id,
        },
        data: {
          isUsed: true,
        },
      });

      return {
        message: "Invite used",
      };
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  }

  async revokeInvite(code: string) {
    try {
      const invite = await this.prisma.invite.findFirst({
        where: {
          code,
        },
      });

      if (!invite) {
        return {
          error: "Invite not found",
        };
      }

      await this.prisma.invite.delete({
        where: {
          id: invite.id,
        },
      });

      return {
        message: "Invite revoked",
      };
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  }
}
