import { SchoolController } from "@/controllers/school-controller";
import { auth } from "@/middlewares/auth";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, options: object) {
  const schoolController = new SchoolController();

  fastify.get(
    "/schools/:id",
    { preHandler: auth },
    schoolController.getSchools
  );
}
