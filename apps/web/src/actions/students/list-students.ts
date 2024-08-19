"use server";

import { db } from "@/lib/db";

export async function list_students(schoolId: string) {
  const students = await db.student.findMany({
    where: { school: { id: schoolId } },
    include: {
      classroom: true,
    },
  });

  if (!students) {
    throw new Error("Não há estudantes.");
  }

  return students;
}
