-- AlterTable
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClassroomToStudent_AB_unique";

-- AlterTable
ALTER TABLE "_ExamToStudent" ADD CONSTRAINT "_ExamToStudent_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ExamToStudent_AB_unique";

-- AlterTable
ALTER TABLE "_SchoolToUser" ADD CONSTRAINT "_SchoolToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_SchoolToUser_AB_unique";
