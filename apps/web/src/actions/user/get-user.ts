"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function get_user(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) {
    redirect("/login");
  }

  return user;
}
