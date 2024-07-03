import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class TestController {
  async getTests(request: FastifyRequest, reply: FastifyReply) {
    try {
      const getTestsBodySchema = z.object({
        id: z.string(),
      });

      const { id } = getTestsBodySchema.parse(request.params);
      const tests = await prisma.test.findMany({
        where: {
          classes: {
            some: {
              schoolId: id,
            },
          },
        },
        include: {
          classes: true,
        },
      });

      return reply.status(200).send({ tests });
    } catch (error: any) {
      console.error(error);
      return reply.status(500).send({ error: error.message });
    }
  }
}
