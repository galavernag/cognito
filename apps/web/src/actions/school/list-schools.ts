"use server";

import { db } from "@/lib/db";

export async function list_schools(userId: string) {
  const schools = await db.school.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
    include: {
      students: {
        include: {
          _count: true,
        },
      },
      users: {
        include: {
          _count: true,
        },
      },
    },
  });

  if (schools.length === 0) {
    return null;
  }

  return schools;
}
