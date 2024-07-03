import { prisma } from "@/services/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class SchoolController {
  async getSchools(request: FastifyRequest, reply: FastifyReply) {
    try {
      const schools = await prisma.school.findMany({
        where: {
          members: {
            some: { id: request.userId },
          },
        },
      });

      return reply.status(200).send({ schools });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }

  async createSchool(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createSchoolBodySchema = z.object({
        name: z.string(),
        domain: z.string(),
      });

      const { name, domain } = createSchoolBodySchema.parse(request.body);

      const schoolAlreadyExistsWithDomain = await prisma.school.findFirst({
        where: {
          domain,
        },
      });

      if (schoolAlreadyExistsWithDomain) {
        return reply.status(400).send({
          error: "This domain is already in use",
        });
      }

      const school = await prisma.school.create({
        data: {
          name,
          domain,
        },
      });

      return reply.status(201).send({ school });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }
}
