// diagnostic.js — run from backend/ folder:  node diagnostic.js <interviewId>
// This tests the generateReport logic directly so you can see the real error.

import { PrismaClient } from "./src/generated/index.js";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const interviewId = process.argv[2];
if (!interviewId) {
  console.error("Usage: node diagnostic.js <interviewId>");
  process.exit(1);
}

function deserializeIssueDescription(raw) {
  if (!raw) return { text: "", example: null, suggestion: null };
  try {
    const parsed = JSON.parse(raw);
    return { text: parsed.text || raw, example: parsed.example || null, suggestion: parsed.suggestion || null };
  } catch {
    return { text: raw, example: null, suggestion: null };
  }
}

async function main() {
  console.log(`\n🔍 Diagnosing report for interview: ${interviewId}\n`);

  const interview = await prisma.interview.findUnique({
    where:   { id: interviewId },
    include: { config: true, user: true, issues: true, questions: true },
  });

  if (!interview) {
    console.error("❌ Interview not found in database!");
    return;
  }

  console.log("✅ Interview found:");
  console.log("   status     :", interview.status);
  console.log("   overallScore:", interview.overallScore);
  console.log("   questions  :", interview.questions.length);
  console.log("   issues     :", interview.issues.length);
  console.log("   user       :", interview.user?.name);
  console.log("   role       :", interview.config?.role);

  const scoredQuestions = interview.questions.filter(
    (q) => typeof q.scoreAverage === "number" && q.scoreAverage > 0
  );
  console.log("\n📊 Scored questions:", scoredQuestions.length);
  scoredQuestions.forEach((q, i) => {
    console.log(`   Q${i+1}: scoreAverage=${q.scoreAverage}`, q.evaluation);
  });

  console.log("\n🚩 Flagged issues:", interview.issues.length);
  interview.issues.forEach((issue, i) => {
    const deserialized = deserializeIssueDescription(issue.description);
    console.log(`   Issue ${i+1}: category=${issue.category} severity=${issue.severity}`);
    console.log(`            raw description = ${issue.description?.substring(0, 80)}`);
    console.log(`            deserialized    =`, deserialized);
  });

  if (scoredQuestions.length === 0) {
    console.log("\n⚠️  WARNING: No scored questions found!");
    console.log("   All questions:");
    interview.questions.forEach((q, i) => {
      console.log(`   Q${i+1}: scoreAverage=${q.scoreAverage} prompt=${q.prompt?.substring(0,50)}`);
    });
  }

  console.log("\n✅ Diagnostic complete — no crash means the DB data is fine.");
  console.log("   If report still fails, the issue is in the import/module loading.\n");
}

main()
  .catch(err => console.error("❌ DIAGNOSTIC ERROR:", err))
  .finally(() => prisma.$disconnect());