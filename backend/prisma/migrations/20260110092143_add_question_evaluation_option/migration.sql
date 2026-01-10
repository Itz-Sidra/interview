/*
  Warnings:

  - You are about to drop the column `expectedAnswer` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FlaggedIssue" ALTER COLUMN "timestampMs" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "expectedAnswer",
ADD COLUMN     "evaluation" JSONB,
ADD COLUMN     "scoreAverage" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "s3Key" DROP NOT NULL;
