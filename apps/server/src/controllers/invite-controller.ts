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

      return reply.status(201).send({ invite });
    } catch (error: any) {
      console.log(error);
      return reply.status(500).send({ error: error.message });
    }
  }
}
