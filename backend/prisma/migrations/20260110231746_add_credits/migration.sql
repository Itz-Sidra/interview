-- AlterTable
ALTER TABLE "User" ADD COLUMN "credits" INTEGER NOT NULL DEFAULT 200;

-- Update existing users to have 200 credits
UPDATE "User" SET "credits" = 200 WHERE "credits" IS NULL OR "credits" < 200;
