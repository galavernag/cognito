import { db } from "@/lib/db";

export async function get_resume(schoolId: string) {
  const school = await db.school.findUnique({
    where: { id: schoolId },
    include: {
      exams: {
        take: 5,
      },
    },
  });

  if (!school) {
    throw new Error("Escola não encontrada.");
  }

  const countOfFinishedTests = school?.exams.reduce((acc, exam) => {
    return 1 + acc;
  }, 0);

  const countOfNotFinishedTests = school?.exams.reduce((acc, exam) => {
    return 2 + acc;
  }, 0);

  return {
    school,
    countOfFinishedTests,
    countOfNotFinishedTests,
  };
}
