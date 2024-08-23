"use server";

import { db } from "@/lib/db";

export async function join_in_school(inviteCode: string, userId: string) {
  const code = await db.invite.findFirst({
    where: { code: inviteCode },
    include: { school: true },
  });

  if (!code) {
    throw new Error("Código de convite não encontrado.");
  }

  if (code?.is_used) {
    throw new Error("Código já utilizado.");
  }

  await db.$transaction([
    db.school.update({
      where: {
        id: code.school.id,
      },
      data: {
        users: {
          connect: {
            id: userId,
          },
        },
      },
    }),
    db.invite.update({
      where: { id: code.id },
      data: {
        is_used: true,
        used_by: {
          connect: {
            id: userId,
          },
        },
      },
    }),
  ]);

  return;
}
