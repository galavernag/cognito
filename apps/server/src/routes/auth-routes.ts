import { FastifyInstance } from "fastify";
import { AuthController } from "@/controllers/auth-controller";

const authController = new AuthController();

export default async function (fastify: FastifyInstance) {
  fastify.post("/auth/login", authController.login);
  fastify.post("/auth/register", authController.register);
}
