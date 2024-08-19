"use server";

import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { z } from "zod";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(data: FormData) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { email, password } = schema.parse({
    email: data.get("email"),
    password: data.get("password"),
  });

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return {
      code: 404,
      message: "User not found.",
    };
  }

  const verified = bcrypt.compare(password, user.password!);

  if (!verified) {
    return {
      code: 401,
      message: "Not authorized.",
    };
  }

  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, { expiresIn: "7d" });

  return {
    token,
  };
}
