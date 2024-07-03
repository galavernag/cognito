import { prisma } from "@/services/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class SchoolController {
  async getSchools(request: FastifyRequest, reply: FastifyReply) {
    try {
      const getSchoolsBodySchema = z.object({
        id: z.string(),
      });

      const { id } = getSchoolsBodySchema.parse(request.params);
      const schools = await prisma.school.findMany({
        where: {
          members: {
            some: { id },
          },
        },
      });

      return reply.status(200).send({ schools });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }
}
