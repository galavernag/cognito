import { AuthController } from "@/controllers/auth-controller";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  const authController = new AuthController();

  fastify.post("/auth/login", authController.login);
  fastify.post("/auth/register", authController.register);
}
