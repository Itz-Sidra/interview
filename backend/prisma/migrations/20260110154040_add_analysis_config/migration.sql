-- AlterTable
ALTER TABLE "FlaggedIssue" ALTER COLUMN "timestampMs" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "InterviewConfig" ADD COLUMN     "companyType" TEXT;

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "s3Key" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ExamConfig" (
    "id" TEXT NOT NULL,
    "configId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "examType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "topics" TEXT[],
    "questionsCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisConfig" (
    "id" TEXT NOT NULL,
    "configId" TEXT NOT NULL,
    "facial" BOOLEAN NOT NULL,
    "technical" BOOLEAN NOT NULL,
    "vocal" BOOLEAN NOT NULL,
    "linguistic" BOOLEAN NOT NULL,
    "intensity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamConfig_configId_key" ON "ExamConfig"("configId");

-- CreateIndex
CREATE UNIQUE INDEX "AnalysisConfig_configId_key" ON "AnalysisConfig"("configId");

-- AddForeignKey
ALTER TABLE "ExamConfig" ADD CONSTRAINT "ExamConfig_configId_fkey" FOREIGN KEY ("configId") REFERENCES "InterviewConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisConfig" ADD CONSTRAINT "AnalysisConfig_configId_fkey" FOREIGN KEY ("configId") REFERENCES "InterviewConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
