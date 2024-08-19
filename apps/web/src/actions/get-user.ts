"use server";

import { db } from "@/lib/db";

export async function get_user(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
}
