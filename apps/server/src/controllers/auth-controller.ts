import { FastifyReply, FastifyRequest } from "fastify";

import AuthService from "@/services/auth-service";
import { prisma } from "@/lib/prisma";
import { JwtService } from "@/services/jwt-service";
import { BcryptService } from "@/services/bcrypt-service";

import z from "zod";
import { TokenInterface } from "@/interfaces/token-service.interface";
import { CryptoInterface } from "@/interfaces/crypto-service.interface";

export class AuthController {
  private tokenService: TokenInterface;
  private cryptoService: CryptoInterface;
  private authService: AuthService;

  constructor() {
    this.tokenService = new JwtService();
    this.cryptoService = new BcryptService();

    this.authService = new AuthService(
      prisma,
      this.tokenService,
      this.cryptoService
    );

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
