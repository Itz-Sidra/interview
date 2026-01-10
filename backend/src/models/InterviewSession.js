import { PrismaClient } from "../generated/index.js";

const prisma = new PrismaClient();

/**
 * Fetch interview session (with full history)
 */
export async function getInterviewSession(interviewId) {
  const prisma = new PrismaClient();
  
  try {
    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
      include: {
        config: true,
        questions: true,
        issues: true
      }
    });

    if (!interview) {
      return null;
    }

    // Build session structure
    return {
      interviewId: interview.id,
      userId: interview.userId,
      configId: interview.configId,
      cumulativeScores: {
        overall: interview.overallScore || 0,
        technical: interview.overallScore || 0,
        confidence: interview.overallScore || 0,
        grammar: interview.overallScore || 0
      }
    };
  } catch (error) {
    console.error("Get session error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Save question and evaluation results
 */
export async function saveQuestionAndEvaluation(interviewId, question, evaluation) {
  const prisma = new PrismaClient();
  
  try {
    // Save question
    const savedQuestion = await prisma.question.create({
      data: {
        interviewId,
        prompt: question
      }
    });

    // Save detected issues with proper category mapping
    if (evaluation.detectedIssues && evaluation.detectedIssues.length > 0) {
      const issuePromises = evaluation.detectedIssues.map((issue) => {
        // Map issue types to valid category enum values
        const categoryMap = {
          'FILLER_WORDS': 'FILLER_WORDS',
          'LOW_CONFIDENCE': 'CONFIDENCE',
          'GRAMMAR': 'GRAMMAR',
          'MISSING_CONCEPTS': 'TECHNICAL',
          'VAGUE_ANSWER': 'COMMUNICATION'
        };

        const category = categoryMap[issue.type] || 'COMMUNICATION';
        const description = issue.description || 'No description provided';
        const severity = issue.severity || 1;
        const timestampMs = BigInt(Date.now()); // Convert to BigInt

        console.log('Creating FlaggedIssue:', { 
          category, 
          description, 
          severity, 
          timestampMs: timestampMs.toString() 
        });

        return prisma.flaggedIssue.create({
          data: {
            interviewId,
            category,
            description,
            severity,
            timestampMs
          }
        });
      });

      await Promise.all(issuePromises);
    }

    return savedQuestion;
  } catch (error) {
    console.error("Save evaluation error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Update cumulative scores
 */
export async function updateInterviewScores(interviewId, evaluation) {
  const prisma = new PrismaClient();
  
  try {
    // Calculate average score
    const scores = evaluation.evaluation;
    const averageScore = (
      scores.answerQuality + 
      scores.relevance + 
      scores.clarity + 
      scores.completeness + 
      scores.technicalDepth
    ) / 5;

    // Update interview with cumulative score
    await prisma.interview.update({
      where: { id: interviewId },
      data: {
        overallScore: averageScore
      }
    });

    console.log('Updated interview scores:', { interviewId, averageScore });
  } catch (error) {
    console.error("Update scores error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export default {
  getInterviewSession,
  saveQuestionAndEvaluation,
  updateInterviewScores
};