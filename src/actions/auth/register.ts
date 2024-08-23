"use server";

import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { z } from "zod";

import bcrypt from "bcrypt";
import * as jose from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

  const token = await new jose.SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("72h")
    .setSubject(user.id)
    .sign(env.JWT_SECRET);

  const cookiesStore = cookies();

  cookiesStore.set("cognito.token", token, {
    expires: Date.now() + 24 * 60 * 60 * 1000 * 7, // 7 days
    secure: true,
    httpOnly: true,
    path: "/",
    sameSite: "strict",
  });
  cookiesStore.set("cognito.userId", user.id, {
    expires: Date.now() + 24 * 60 * 60 * 1000 * 7, // 7 days
    secure: true,
    httpOnly: true,
    path: "/",
    sameSite: "strict",
  });
  redirect("/app");
}
