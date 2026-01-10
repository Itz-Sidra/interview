/*
  Warnings:

  - You are about to drop the column `expectedAnswer` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "expectedAnswer",
ADD COLUMN     "evaluation" JSONB,
ADD COLUMN     "scoreAverage" DOUBLE PRECISION;
