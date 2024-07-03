import { FastifyInstance } from "fastify";
import { AuthController } from "@/controllers/auth-controller";
import { AuthService, BcryptService, JwtService } from "@cognito/services";
import { prisma } from "@/lib/prisma";

const jwtServiceInstance = new JwtService();
const bcryptServiceInstance = new BcryptService();
const authServiceInstance = new AuthService(
  prisma,
  jwtServiceInstance,
  bcryptServiceInstance
);

const authController = new AuthController(authServiceInstance);

export default async function (fastify: FastifyInstance) {
  fastify.post("/auth/login", authController.login);
  fastify.post("/auth/register", authController.register);
}
