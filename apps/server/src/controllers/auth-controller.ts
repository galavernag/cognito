import { FastifyReply, FastifyRequest } from "fastify";

export class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    return {
      message: "Hello World",
    };
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    return {
      message: "Hello World",
    };
  }
}
