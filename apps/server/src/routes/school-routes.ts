import { SchoolController } from "@/controllers/school-controller";
import { auth } from "@/middlewares/auth";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, options: object) {
  const schoolController = new SchoolController();

  fastify.get("/schools", { preHandler: auth }, schoolController.getSchools);
  fastify.post(
    "/school/create",
    { preHandler: auth },
    schoolController.createSchool
  );
}
