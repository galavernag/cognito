import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, options: any) {
  fastify.post("/auth/login", async (request, reply) => {});
  fastify.post("/auth/register", async (request, reply) => {});
}
