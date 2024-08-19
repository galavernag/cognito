"use server";

import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { redirect } from "next/navigation";
import { z } from "zod";

import bcrypt from "bcrypt";
import * as jose from "jose";
import { cookies } from "next/headers";

export async function login(data: unknown) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { email, password } = schema.parse(data);

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("User not found.");
  }

  const verified = bcrypt.compare(password, user.password!);

  if (!verified) {
    throw new Error("Not authorized.");
  }

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
