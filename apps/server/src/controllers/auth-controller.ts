import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService, JwtService, BcryptService } from "@cognito/services";
import { TokenInterface, CryptoInterface } from "@cognito/interfaces/";

import { prisma } from "@/lib/prisma";

import z from "zod";

export class AuthController {
  private authService: AuthService;

  constructor(authServiceInstance: AuthService) {
    this.authService = authServiceInstance;

    // Amarra o contexto do 'this' aos métodos
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
      });

      const { email, password } = loginBodySchema.parse(request.body);

      const response = await this.authService.login(email, password);

      if (response.error) {
        return reply.status(400).send({ error: response.error });
      }

      return reply.status(200).send({ token: response.token });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const loginBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      });

      const { name, email, password } = loginBodySchema.parse(request.body);
      const response = await this.authService.register(name, email, password);

      if (response.error) {
        return reply.status(400).send({ error: response.error });
      }

      return reply.status(200).send({ token: response.token });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }
}
