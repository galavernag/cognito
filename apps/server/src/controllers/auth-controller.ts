import { FastifyReply, FastifyRequest } from "fastify";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET!;
const bcryptSalt = Number(process.env.BCRYPT_SALT);

export class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
      });

      const { email, password } = loginBodySchema.parse(request.body);
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return reply.status(400).send({
          message: "User not found",
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return reply.status(400).send({
          message: "Password is incorrect",
        });
      }

      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "7d",
      });

      return reply.status(200).send({
        token,
      });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      });

      const { name, email, password } = registerBodySchema.parse(request.body);
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        return reply.status(400).send({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, bcryptSalt);
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      const token = jwt.sign({ userId: newUser.id }, jwtSecret, {
        expiresIn: "7d",
      });
      return reply.status(201).send({
        token,
      });
    } catch (error: any) {
      return reply.status(500).send({ error: error.message });
    }
  }
}
