import { TestController } from "@/controllers/test-controller";
import { auth } from "@/middlewares/auth";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  const testController = new TestController();

  fastify.get("/tests/:id", { preHandler: auth }, testController.getTests);
}
