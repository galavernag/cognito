import { prisma } from "@/services/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class InviteController {
  async createInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createInviteBodySchema = z.object({
        schoolId: z.string().uuid(),
        expiresAt: z.string(),
      });

      const { schoolId, expiresAt } = createInviteBodySchema.parse(
        request.body
      );

      const invite = await prisma.invite.create({
        data: {
          createdBy: {
            connect: {
              id: request.userId,
            },
          },
          school: {
            connect: {
              id: schoolId,
            },
          },
          expiresAt: new Date(expiresAt),
        },
      });

      return reply.status(201).send({ message: "Created invite", invite });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }

  async useInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const useInviteParamsSchema = z.object({
        code: z.string().cuid(),
      });

      const { code } = useInviteParamsSchema.parse(request.params);
      const invite = await prisma.invite.findFirst({
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
        return reply.status(404).send({ error: "Invite not found" });
      }

      const updatedUser = await prisma.user.update({
        where: {
          id: request.userId,
        },
        data: {
          schools: {
            connect: {
              id: invite.schoolId,
            },
          },
        },
      });

      await prisma.invite.update({
        where: {
          id: invite.id,
        },
        data: {
          isUsed: true,
        },
      });

      return reply.status(200).send({ message: "Invite used" });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }

  async revokeInvite(request: FastifyRequest, reply: FastifyReply) {
    try {
      const revokeInviteParamsSchema = z.object({
        code: z.string().cuid(),
      });

      const { code } = revokeInviteParamsSchema.parse(request.params);

      const inviteToBeRevoked = await prisma.invite.findFirst({
        where: {
          code,
        },
      });

      if (!inviteToBeRevoked) {
        return reply.status(404).send({ error: "Invite not found" });
      }

      await prisma.invite.delete({
        where: {
          id: inviteToBeRevoked.id,
        },
      });

      return reply.status(200).send({ message: "Invite revoked" });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }
}
