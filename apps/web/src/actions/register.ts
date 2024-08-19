"use server";

import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { z } from "zod";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(data: unknown) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });

  const { name, email, password } = schema.parse(data);

  console.log(name, email, password);

  const userExists = await db.user.findUnique({ where: { email } });

  if (userExists) {
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(env.SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, { expiresIn: "7d" });

  return {
    user,
    token,
  };
}
