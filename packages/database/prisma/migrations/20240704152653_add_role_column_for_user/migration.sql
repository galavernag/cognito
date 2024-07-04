-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER', 'AUDITOR');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "roles" "Role"[];
